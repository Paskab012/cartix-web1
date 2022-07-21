import DangerIcon from '../../assets/upload-Danger.svg'

const CheckFileType = ({files}) => {
    const fileExt = files.map(file => file.name.split('.').pop())
    const CheckType = () => {
        if (fileExt.includes('xlsx') || fileExt.includes('xls') || fileExt.includes('csv')) {
            return(<span></span>);
        } else {
            return (<span style={{color: "red"}}><img src={DangerIcon} alt="alter-icon" /> Please make sure your file has a right format</span>);
        }
    }
    return (
        <CheckType />   // <div className="submit-clm">
    )
};

export default CheckFileType;
