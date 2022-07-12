import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'

const UploadStyle = styled.div`
    background: #eef0f5;
    padding: 20px;
    margin: 20px;
`;

const FileUploader = ({ handleChangeUploadFile }) => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log('acceptedFiles =>', acceptedFiles)
        if (acceptedFiles.length) {
            handleChangeUploadFile(acceptedFiles[0]);
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <UploadStyle {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </UploadStyle>
    )
}

export default FileUploader
