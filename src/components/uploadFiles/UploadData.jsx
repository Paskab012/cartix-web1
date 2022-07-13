/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import GoBack from '../../assets/goback.svg';
import UploadIcon from '../../assets/upload_icon.svg';
import './data_style.css';
import DownloadIcon from '../../assets/download_icon.svg';
import DocIcon from '../../assets/doc_icon.svg';
import DataNavbar from "../data/DataNavbar";
import { Line } from 'rc-progress';

const chunkSize = 10 * 1024;
const XlsxUpload = () => {
  const [percentage, setPercentage] = useState(0);
  // const [files, setFiles] = useState([]);

  const onDrop = files  => {
    setPercentage(0);
    let data = new FormData();
    files.forEach(file => {
      data.append('files[]', file, file.name);
    })
    const url = 'https://httpbin.org/post';

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: progressEvent => {
        const percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        if (percent >= 100) {
          setPercentage(percent);
        } else {
          setPercentage(0);
        }
      }
    };

    axios.post(url, data, config)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
        setPercentage({ percent: 0 });
      });
  };

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  // const thumbs = files.map(file => (
  //   <div key={file.name}>
  //     <div className="file">
  //       <img src={DocIcon} alt="doc_icon" onLoad={() => { URL.revokeObjectURL(file.preview) }}/>
  //       <div className='file_details'>
  //         <p id="file_name">{file.name}</p>
  //         <p>{file.size / 100}Kb</p>
  //       </div>
  //       <div>
  //         <Line percent={percentage} strokeWidth='3' strokeColor='#2db7f5' strokeLinecap='square' />
  //         {/* <span id="value">{percentage}%</span> */}
  //       </div>
  //     </div>
  //   </div>
  // ));

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  // }, []);

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
              <Line percent={percentage} strokeWidth='3' strokeColor='#2db7f5'/>
            </div>
            <div className="files">
            {/* <span id="value">{percentage}%</span> */}
              {/* {thumbs} */}
              {/* {files.map((file,fileIndex) => {
                let progress = 0;
                if (file.finalFilename) {
                  progress = 100;
                } else {
                  const uploading = fileIndex === currentFileIndex;
                  const chunks = Math.ceil(file.size / chunkSize);
                  if (uploading) {
                    progress = Math.round(currentChunkIndex / chunks * 100);
                  } else {
                    progress = 0;
                  }
                }
                return (
                  <a className="file" target="_blank"
                    href={'http://127.0.0.1:8000/api/v1/xls/{id}'} rel="noreferrer">
                    <img src={DocIcon} alt="doc_icon" />
                    <div className='file_details'>
                      <p id="file_name">{file.name}</p>
                      <p>{file.size / 100}Kb</p>
                    </div>
                    <div className={"progress " + (progress === 100 ? 'done' : '')}
                        style={{width:progress+'%'}}>
                    </div>
                    <span id="value">{progress}%</span>
                  </a>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XlsxUpload;
