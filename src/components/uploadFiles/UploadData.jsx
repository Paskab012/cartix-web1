/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {useDropzone} from 'react-dropzone'
import GoBack from '../../assets/goback.svg';
import UploadIcon from '../../assets/upload_icon.svg';
import './data_style.css';
import DownloadIcon from '../../assets/download_icon.svg';
import DocIcon from '../../assets/doc_icon.svg';
import DataNavbar from "../data/DataNavbar";
import { Line } from 'rc-progress';

const XlsxUpload = () => {
  const [files, setFiles] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      // setPercentage(Math.round((100 * file.loaded) / data.total))
      setFiles([...files, ...acceptedFiles]);
    },
    accept: ['image/*', '.pdf'],
  })

  const thumbs = files.map((file, fileIndex) => {
    console.log(file.name);
    let progress = 0;
    let type = ".xlsx";
    let fileName = file.name;
    let valideName = fileName.split(-type.length) == type;
    console.log(valideName);

    return(
    <div key={file.name} className="file-container">
      <div className="file">
        <img src={DocIcon} alt="doc_icon" onLoad={() => { URL.revokeObjectURL(file.preview) }}/>
        <div className='file_details'>
          <p id="file_name">{file.name}</p>
          <p>{file.size / 100}Kb</p>
        </div>
        <div>
          <Line percent={progress} strokeWidth='3' strokeColor='#2db7f5' strokeLinecap='square' />
          <span id="value">{progress}%</span>
        </div>
      </div>
      { file.name === valideName ?
        <button className="button disabled" disabled>Submit</button>
        : 
        <button className="button">Submit</button> 
      }
    </div>
  )});

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="data">
      <DataNavbar />
      <div className='data_container center-flex'>
        <div className='card_data'>
          <Link to="/savings-group-map/data" className="upload_header">
            <img src={GoBack} alt="arrow_back" />
            <p>Go back</p>
          </Link>
          <div className="data_upload">
            <div className="data_header">
              <p>SCGs data compilation template</p>
              <img src={DownloadIcon} alt="download_icon"/>
            </div>
            <div {...getRootProps({className: "dropzone active"})}>
              <input {...getInputProps()} />
              <img src={UploadIcon} alt='upload_icon' />
              <p><span className='uppload_text'>Click to upload</span> or drag and drop</p>
              <p>XLSX, XLS, CSV</p>
            </div>
            {thumbs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XlsxUpload;
