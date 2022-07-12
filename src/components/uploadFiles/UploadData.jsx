/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { useDropzone } from 'react-dropzone'
import GoBack from '../../assets/goback.svg';
import UploadIcon from '../../assets/upload_icon.svg';
import './data_style.css';
import DownloadIcon from '../../assets/download_icon.svg';
import DocIcon from '../../assets/doc_icon.svg';
import DataNavbar from "../data/DataNavbar";

const chunkSize = 10 * 1024;
const XlsxUpload = () => {
  const [dropzoneActive, setDropzoneActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(null);
  const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState(null);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(null);
  
  // function handleDrop(e) {
  //   e.preventDefault();
  //   setFiles([...files, ...e.dataTransfer.files]);
  // }

  const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      console.log('acceptedFiles =>', acceptedFiles)
      if (acceptedFiles.length) {
         setFiles(acceptedFiles[0]);
      }
  }, [])

  function readAndUploadCurrentChunk() {
    const reader = new FileReader();
    const file = files[currentFileIndex];
    if (!file) {
      return;
    }
    const from = currentChunkIndex * chunkSize;
    const to = from + chunkSize;
    const blob = file.slice(from, to);
    reader.onload = e => uploadChunk(e);
    reader.readAsDataURL(blob);
  }

  function uploadChunk() {
    // const data = readerEvent.target.result;
    // const params = new URLSearchParams();
    // params.set('name', file.name);
    // params.set('size', file.size);
    // params.set('currentChunkIndex', currentChunkIndex);
    // params.set('totalChunks', Math.ceil(file.size / chunkSize));
    const headers = {"Content-type": "application/json",};
    const url = 'http://127.0.0.1:8000/api/v1/xls/';
    axios.post(url, {headers})
      .then(response => {
        const file = files[currentFileIndex];
        const filesize = files[currentFileIndex].size;
        const chunks = Math.ceil(filesize / chunkSize) - 1;
        const isLastChunk = currentChunkIndex === chunks;
        if (isLastChunk) {
          file.finalFilename = response.data.finalFilename;
          setLastUploadedFileIndex(currentFileIndex);
          setCurrentChunkIndex(null);
        } else {
          setCurrentChunkIndex(currentChunkIndex + 1);
        }
      });
  }

  useEffect(() => {
    if (lastUploadedFileIndex === null) {
      return;
    }
    const isLastFile = lastUploadedFileIndex === files.length - 1;
    const nextFileIndex = isLastFile ? null : currentFileIndex + 1;
    setCurrentFileIndex(nextFileIndex);
  }, [currentFileIndex, files.length, lastUploadedFileIndex]);

  useEffect(() => {
    if (files.length > 0) {
      if (currentFileIndex === null) {
        setCurrentFileIndex(
          lastUploadedFileIndex === null ? 0 : lastUploadedFileIndex + 1
        );
      }
    }
  }, [currentFileIndex, files.length, lastUploadedFileIndex]);

  useEffect(() => {
    if (currentFileIndex !== null) {
      setCurrentChunkIndex(0);
    }
  }, [currentFileIndex]);
    
    useEffect(() => {
    if (currentChunkIndex !== null) {
      readAndUploadCurrentChunk();
    }
  }, [currentChunkIndex, readAndUploadCurrentChunk]);

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
            <div
              onDragOver={e => {setDropzoneActive(true); e.preventDefault();}}
              onDragLeave={e => {setDropzoneActive(false); e.preventDefault();}}
              onDrop={onDrop}
              className={"dropzone" + (dropzoneActive ? " active" : "")}>
              <img src={UploadIcon} alt='upload_icon' />
              <p><span className='uppload_text'>Click to upload</span> or drag and drop</p>
              <p>XLSX, XLS, CSV</p>
            </div>
            <div className="files">
              {files.map((file,fileIndex) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XlsxUpload;
