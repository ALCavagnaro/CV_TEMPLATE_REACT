import { jsPDF } from "jspdf";

const Print = () => {

            const doc = new jsPDF();
            const html = document.querySelector("#pdf-template");
            const html2 = html.cloneNode(true); // clonación
            html2.style.fontSize = '7px';
            html2.style.width = '50mm'; //ancho del texto
            html2.style.height = '50mm';
            html2.style.marginTop ='2mm';
            html2.style.marginLeft ='1mm';
            html2.style.marginRight ='1mm';
            html2.style.padding = '1.5mm';

            let image = html2.querySelector('#pdf-img');

      
                  if (image != null) {
                  
                  image.style.height = '30px';
                  image.style.width = '30px';
                  image.style.margin = '3px 21mm';
                  
                  }     

            
            let description = html2.querySelector('.descripción');

                  if (description != null) {

            description.style.fontSize='3.5px';

                  }

            let contact = html2.querySelectorAll('.user-contact');

                  for (let element of contact) {
                        
                        element.style.fontSize = '3.4px';
                        element.style.width = '48mm';
                        element.style.margin = '2px auto 2px auto';
                  }

            

            let experienceTitle = html2.querySelector('.experience-title');

            if (experienceTitle != null) {  

            experienceTitle.style.fontSize = '4.5px';

            let experienceContainer = html2.querySelector('.user-experience');

            experienceContainer.style.margin = '1mm auto 1mm auto';

            let experience = html2.querySelectorAll('.user-experience-p');

                  for (let element of experience) {

                        element.style.fontSize = '3.6px';
                        element.style.width = '48mm';
                        element.style.padding = '1px';
                        element.style.margin = '3px auto';
                        element.style.letterSpacing = '0.6px';
                  }

            }
            
            let studyTitle = html2.querySelector('.study-title');

            if (studyTitle != null) {

            studyTitle.style.fontSize = '4.5px';

            let studyContainer = html2.querySelector('.user-education');

            studyContainer.style.margin = '1mm auto 1mm auto';

            let study = html2.querySelectorAll('.user-education-p');

                  for (let element of study) {

                        element.style.fontSize = '3.6px';
                        element.style.width = '48mm';
                        element.style.padding = '1px';
                        element.style.margin = '3px auto';
                        element.style.letterSpacing = '0.6px';

                  }

            }

            let recommendationTitle = html2.querySelector('.recommendation-title');

            if (recommendationTitle != null) {

            recommendationTitle.style.fontSize = '4.5px';

            let recommendationContainer = html2.querySelector('.user-recommendation');

            recommendationContainer.style.margin = '1mm auto 1mm auto';

            let recommendation = html2.querySelectorAll('.user-recommendation-p');
            
            for (let element of recommendation) {

                  element.style.fontSize = '3.6px';
                  element.style.width = '48mm';
                  element.style.padding = '1px';
                  element.style.margin = '3px auto';
                  element.style.letterSpacing = '0.6px';

                  }

            }

            let abilityTitle = html2.querySelector('.ability-title');

            if (abilityTitle != null) {
            
            abilityTitle.style.fontSize = '4.5px';

            let abilityContainer = html2.querySelector('.user-ability');

            abilityContainer.style.margin = '1mm auto 1mm auto';

            let ability = html2.querySelectorAll('.user-ability-p');

            for (let element of ability) {

                  element.style.fontSize = '3.6px';
                  element.style.width = '48mm';
                  element.style.padding = '1px';
                  element.style.margin = '3px auto';
                  element.style.letterSpacing = '0.6px';

                  }

            }

            let activitiesTitle = html2.querySelector('.activities-title');

            if (activitiesTitle != null) {

            activitiesTitle.style.fontSize = '4.5px';

            let activitiesContainer = html2.querySelector('.user-activities');

            activitiesContainer.style.margin = '1mm auto 1mm auto';

            let activities = html2.querySelectorAll('.user-activities-p');

            for (let element of activities) {

                  element.style.fontSize = '3.6px';
                  element.style.width = '48mm';
                  element.style.padding = '1px';
                  element.style.margin = '3px auto';
                  element.style.letterSpacing = '0.6px';

                  }

            }

      
            doc.html(html2, {

                  x:0,
                  y:1,
                  autoPaging: 'text',
                  margin: [0, 0, 1, 0],
                  callback: function (doc) {     
                   doc.save();
                  },

               });
      }


export default Print;