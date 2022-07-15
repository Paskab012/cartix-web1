import React from "react";

export default class FileItem extends React.Component {
    state = {
      currentProgress: 0
    }
    componentDidMount() {
      this.timer = setInterval(() => {
        if (this.state.currentProgress >= 100)
          clearInterval(this.timer); 
        else {
          const rate = Math.floor(Math.random() * Math.floor(15));
          this.setState(prevState => {
            prevState.currentProgress += rate;
            return prevState;
          })
        }
      }, 1000);
    }
    render() {
      const pg = this.state.currentProgress;
      const {name, size, progress} = this.props.data;
      const iconUrl = "http://icons.iconarchive.com/icons/pixelkit/swanky-outlines/16/02-File-icon.png";
      const progressBg = 'rgba(0,0,0,.05)';
      const style = {
        backgroundImage: `linear-gradient(to right, ${progressBg}, ${progressBg} ${pg}%, transparent ${pg}%)`,
      };
      return (
        <article>
            
          <h5><img src={iconUrl} alt="file" /> {name}</h5>
          <h5>{(size/1000000).toFixed(2)} MB</h5>
          <h3>{ pg >= 100? '✔' : pg }{ pg < 100 && <small>%</small> }</h3>
          <div className="progress-file">
            <div style={{width:`${pg}%`}}></div>
          </div>
        </article>
      );
    }
  }