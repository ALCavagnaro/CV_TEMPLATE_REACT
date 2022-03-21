import { jsPDF } from "jspdf";

const Print = () => {

            //const item = state.map((item) => JSON.stringify(item))
            const doc = new jsPDF();
            const html = document.querySelector("#pdf-template");
            const html2 = html.cloneNode(true);
            html2.style.backgroundColor = 'bisque'; // clonación
            html2.style.fontSize = '7px';
            html2.style.width = '50mm';
            html2.style.height = '72mm';
            html2.style.margin ='2mm';
            html2.style.padding = '1mm';
            html2.childNodes[0].style.height = '30px';
            html2.childNodes[0].style.width = '30px';
            html2.childNodes[0].style.margin = '3px 21mm';

            let description = html2.querySelector('.descripción');
            description.style.fontSize='3.5px';

            let contact = html2.querySelectorAll('.user-contact');

                  for (let element of contact) {
                        
                        element.style.fontSize = '3.4px';
                        element.style.width = '48mm';
                        element.style.margin = 'auto';
                  }

            let experience = html2.querySelectorAll('.user-experience-p');

                  for (let element of experience) {

                        element.style.fontSize = '3.6px';
                        element.style.width = '48mm';
                        element.style.padding = '1px';
                        element.style.margin = '3px auto';
                        element.style.letterSpacing = '0.8px';
                  }

      
            doc.html(html2, {
                  callback: function (doc) {     
                   doc.save();
                  },

               });
      }


export default Print;