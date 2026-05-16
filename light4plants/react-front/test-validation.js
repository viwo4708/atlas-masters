// --- MOCK VALIDATION LOGIC ---
// This is a "human-readable" version of the logic inside your PlantForm
function simulateValidate(formData) {
    let errors = {};

    if (!formData.light) {
        errors.light = "Please select your light level.";
    }
    if (!formData.experience) {
        errors.experience = "Please select your experience level.";
    }
    if (!formData.type) {
        errors.type = "Please select a plant type.";
    }

    const isValid = Object.keys(errors).length === 0;
    return { isValid, errors };
}

// --- THE TEST SUITE ---
function runTests() {
    console.log("--- STARTING PLANT FORM UNIT TESTS ---\n");

    // Test 1: Empty Form
    const test1Data = { light: "", experience: "", type: "" };
    const test1Result = simulateValidate(test1Data);
    
    console.log("Test 1: Empty Form (Should Fail)");
    console.log(test1Result.isValid ? "FAILED: Form marked as valid" : "PASSED: Form blocked empty input");
    console.log("Errors caught:", JSON.stringify(test1Result.errors, null, 2));
    console.log("--------------------------------------\n");

    // Test 2: Partially Filled Form
    const test2Data = { light: "Bright", experience: "", type: "leafy" };
    const test2Result = simulateValidate(test2Data);

    console.log("Test 2: Partially Filled Form (Should Fail)");
    console.log(test2Result.isValid ? "FAILED: Form ignored missing experience" : "PASSED: Missing field detected");
    console.log("Errors caught:", JSON.stringify(test2Result.errors, null, 2));
    console.log("--------------------------------------\n");

    // Test 3: Fully Filled Form
    const test3Data = { light: "Low", experience: "Beginner", type: "succulent" };
    const test3Result = simulateValidate(test3Data);

    console.log("Test 3: Correct Form (Should Pass)");
    console.log(test3Result.isValid ? "PASSED: Valid form accepted" : "FAILED: Form blocked valid data");
    console.log("Errors caught: (None)");
    console.log("--------------------------------------\n");

    // Test 4: Null / Invalid Data (Should Fail)
    const test4Data = { light: null, experience: "Beginner", type: undefined };
    const test4Result = simulateValidate(test4Data);

    console.log("Test 4: Null/Undefined Values (Should Fail)");
    console.log(test4Result.isValid ? "FAILED: Form accepted null/undefined" : "PASSED: Null values blocked");
    console.log("Errors caught:", JSON.stringify(test4Result.errors, null, 2));
    console.log("--------------------------------------\n");

    console.log("--- ALL TESTS COMPLETE ---");
}

runTests();