import React from 'react'
import { IconContext } from 'react-icons'
const path = require('path')

import {
  FaDownload,
  FaPrint,
  FaEnvelope,
} from 'react-icons/fa'

class React_icons extends React.Component {
 // Click and share current page link

  render() {
    const dlUnitPaths = getdlUnitPaths(this.props.unitPath)

    return (
      <div className="main_content">
        <span>Tools for this {dlUnitPaths.echoUnit}:</span>
        <IconContext.Provider value={{ color: '#2B50A3', size: '3em' }}>
          <p class="my-2 mb-3">
            <div>
              <a href={'mailto:?subject=' + 'Yale-New Haven Teacher Institute ' + 'http://teachersinstitute.yale.edu' + this.props.unitPath}
                className="share_btn"
                alt="share email link"
                title="share email link"
              >
                <FaEnvelope />
              </a>
              <a href={'/curriculum/' + dlUnitPaths.printUnit + '/files/' + dlUnitPaths.pdfDownload + '.pdf'}
                download
                className="dl_pdf middle-icon share_btn"
                alt="download entire guide pdf"
                title="download pdf"
                id="download-pdf"
                >
              <FaDownload />
              </a>
              <a href={'/curriculum/' + dlUnitPaths.printUnit + '/files/' + dlUnitPaths.pdfDownload + '.pdf'}
               className="share_btn print_pdf"
               alt="print pdf version"
               title="print pdf version"
               id="print-pdf"
               taret="_blank"
               >
              <FaPrint />
              </a>
            </div>
          </p>
        </IconContext.Provider>
      </div>
    )
  }
}

export default React_icons


function getdlUnitPaths(dlUnitPath){
  var urlPath = dlUnitPath;
  var pathSplit = urlPath.split("/curriculum");
  var basePath = path.basename(urlPath);
  let reg = new RegExp(/.([h-t]|x)|l/g);
  
  var pathSplit = pathSplit[1].split("/");

  // var str = pathSplit[4];
  var pdfDownload = pathSplit[4];     //str.replace(reg,'');  // Remove .x.html

  // if there is no filename then it is a volume preface
  if (pathSplit.length < 5 || pathSplit[4].trim() == '') {
    var year = pathSplit[2].substring(2);
    var volume = pathSplit[3].padStart(2, '0');
    pdfDownload = year + '.' + volume + '.preface';
  } else {
    pdfDownload = pdfDownload.replace('.x.html', '');
  }
  
  if (pathSplit[1] == "units"){
    var printUnit ='units';
    var echoUnit = 'unit'
  }
  else{
    var printUnit = 'units';
    var echoUnit = 'guide'
    pdfDownload = pdfDownload + '_guide'
  }

  return{
    pdfDownload : pdfDownload,
    printUnit : printUnit,
    echoUnit : echoUnit
  }
}
