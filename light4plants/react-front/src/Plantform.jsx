import "./Plantform.css";
import { useState } from 'react';

function PlantForm({ filterPlants }) { //filterPlants is a function to filter the plants when the form is submitted, will be passed in
    // 1. All state must be inside the function
    const [formData, setFormData] = useState({
        light: "",
        experience: "",
        type: "" //initial state is that these data points are empty
    });

    const [errors, setErrors] = useState({}); //initial state is that there are no errors

    // 2. All helper functions must be inside the function
    function validate() {
        let formErrors = {};

        if (!formData.light) {
            formErrors.light = "Please select your light level.";
        }//if the light property is empty, add the error message to formErrors object (repeat for below properties)

        if (!formData.experience) {
            formErrors.experience = "Please select your experience level.";
        }

        if (!formData.type) {
            formErrors.type = "Please select a plant type.";
        }

        setErrors(formErrors); //update errors state to include the above errors

        return Object.keys(formErrors).length === 0; //takes the keys from the formErrors object, and turns it into an array.
        //returns true/false based on if it's the array length is 0 or not
        //if no errors, then it returns true
    };

    function handleSubmit(e) { //function to execute when form is submitted
        e.preventDefault();//prevents default page refresh to maintain state
        if (validate()) { //if there are no errors
            filterPlants(formData); //sort the plants based on form input
        }
    }//this runs when the form is submitted. validation also runs on submit

    function handleChange(e) {
        const inputName = e.target.name; //gets name of field from event object, ie light, experience, or type
        const inputValue = e.target.value;//gets value that was input from event object

        setFormData ({
            ...formData,//copies in everything that was originally in formData
            [inputName]: inputValue //then changes only the key val pair that was changed. need [] brackets bc js would not understand that you want the key to be the value of the var
        });

        if (errors[inputName]) { //if there's an error in the field that's being handled
            setErrors({
                ...errors, //copy in everthing that was in the error array
                [inputName]:null//then make this field null so the error goes away while the user is fixing it
            });
        }
    }


    return (
        <>
        <form onSubmit={handleSubmit} className="plant-form">

            <div className="form-group">
                <label>Light Availability</label>
                {/* onchange event occurs when an html element is changed */}
                <select name="light" value={formData.light} onChange={handleChange}> 
                    <option value="">-- Choose Light --</option>
                    <option value="None">None</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Bright">Bright</option>
                </select>
                {errors.light && <span className="error-text">{errors.light}</span>}
            </div>

            <div className="form-group">
                <label>Your Experience</label>
                <select name="experience" value={formData.experience} onChange={handleChange}>
                    <option value="">-- Choose Experience --</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                {errors.experience && <span className="error-text">{errors.experience}</span>}
            </div>

            <div className="form-group">
                <label>Preferred Style</label>
                <select name="type" value={formData.type} onChange={handleChange}>
                    <option value="">-- Choose Type --</option>
                    <option value="leafy">Leafy</option>
                    <option value="succulent">Succulent</option>
                    <option value="spiky">Spiky</option>
                    <option value="flowering">Flowering</option>
                    <option value="mushroom">Mushroom</option>
                </select>
                {errors.type && <span className="error-text">{errors.type}</span>}
            </div>
            <button type="submit">Filter Plants</button>
        </form>
        </>
    );
}
export default PlantForm;