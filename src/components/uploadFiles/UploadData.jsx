/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {useDropzone} from 'react-dropzone'
import GoBack from '../../assets/goback.svg';
import UploadIcon from '../../assets/upload_icon.svg';
import './data_style.css';
import DownloadIcon from '../../assets/download_icon.svg';
import DataNavbar from "../data/DataNavbar";
import FileItem from "./Files";
import CheckFileType from "./fileFormat";

const XlsxUpload = () => {
  const [files, setFiles] = useState([]);
  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  }

  const {getRootProps, getInputProps} = useDropzone({ onDrop })

  const handleSubmit = () => {
    const formData = new FormData();
    const category = "SCGs";
    files.forEach(file => {
      formData.append('file', file);  
      formData.append('category', category);
      console.log(file);
      console.log(category);
    }
    );
    axios.post('https://httpbin.org/post', formData)
      .then(res => {
        console.log(res);
      }
      )
      .catch(err => {
        console.log(err);
      }
      )
  }

  const thumbs = files.map(file => (
    <div key={file.name} className="file-container">
      <FileItem data={file} />
    </div>
  ));

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
              
              { !files.length ?
                ''
                :
                <div className="submit-clm">
                  <CheckFileType files={files}/>
                  <button
                    className="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button> 
                </div>
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default XlsxUpload;
