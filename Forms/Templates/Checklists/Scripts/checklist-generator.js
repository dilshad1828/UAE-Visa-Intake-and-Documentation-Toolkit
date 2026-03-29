function generateChecklist(data) {
  console.log("Visa Type:", data.visa_type);
  console.log("Required Documents:");
  for (const doc in data.documents) {
    console.log("- " + doc);
  }
}

module.exports = generateChecklist;
