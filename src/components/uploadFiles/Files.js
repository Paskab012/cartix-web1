import React, {useState, useEffect} from "react";
import DocIcon from '../../assets/doc_icon.svg';

const FileItem = ({data}) => {

  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentProgress >= 100)
        clearInterval(timer); 
      else {
        const rate = Math.floor(Math.random() * Math.floor(100));
        setCurrentProgress(prevState => {
          prevState += rate;
          return prevState;
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [currentProgress]);
  const pg = currentProgress;
  const {name, size, progress} = data;
  const progressBg = 'rgba(0,0,0,.05)';
  const style = {
    backgroundImage: `linear-gradient(to right, ${progressBg}, ${progressBg} ${progress}%, transparent ${progress}%)`,
  };
  return (
    <div className="file">
      <img src={DocIcon} alt="doc_icon"/>
      <div className='file_details'>
        <p id="file_name">{name}</p>
        <p>{(size/1000).toFixed(2)}Kb</p>
      </div>
      <div className="progress_bar">
        <div className="progress-file">
          <div style={{width:`${pg}%`}}></div>
        </div>
        <span>{ pg >= 100? '100%' : pg }{ pg < 100 && <small>%</small> }</span>
      </div>
    </div>
  );
}

export default FileItem;