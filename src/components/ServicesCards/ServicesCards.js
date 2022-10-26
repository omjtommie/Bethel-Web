
import "./ServicesCard.scss";

const ServicesCards = () => {
    return (
    <div className="servicescardPage">
        <div className="box-container">
            <div className="box">
                <h3> In-Patient & Out-Patient Care </h3>
                <p> In-Patient Care involving operations requiring a period of recovery, severe illnesses or conditions that require long-term monitoring 
                    and Out-Patient Care relating to X-rays and MRI scansBlood testing and biopsies.consultations, follow-ups, check-ups, and aftercare following treatment</p>
            </div>
            <div className="box">
                <h3> Family Planning </h3>
                <p> We have professionals who mentor patients on family planning </p>
            </div>
            <div className="box">
                <h3> Surgery </h3>
                <p> We have a state of the art operating room, with an array of inpatient and outpatient surgical services available at Owolola Bethel Hospital. Our surgeons are highly trained in various specialties with several years of experience. </p>
            </div>
            <div className="box">
                <h3> Ante-Natal Care </h3>
                <p> We have well trained health professionals and midwives to help take care to pregnant women.</p>
            </div>
            <div className="box">
                <h3> Child Care </h3>
                <p> We provide high quality and affordable care to children and adolescents and this is a top priority. This level of care has been ensured by a team of highly trained medical, nursing and paramedical staff who are experts in caring for sick babies and older children. 
                    Taking care of these little ones in a child friendly environment is one of the passions of the clinical team, comprising of experienced Paediatricians and nurses.</p>
            </div>
            <div className="box">
                <h3> 24 Hrs Emergency Service </h3>
                <p> We are committed to getting our patient medial treatment as quickly and efficiently as possible.</p>
            </div>
            <div className="box">
                <h3> Immunization </h3>
                <p> We offer immunization to children every 2nd Friday & Last Saturday of every month. </p>
            </div>
            
            <div className="box">
                <h3> Laboratory Investigations </h3>
                <p> We run lab tests and investigations on our patients. </p>
            </div>
        </div>
     </div>
    );
  };
  
  export default ServicesCards;