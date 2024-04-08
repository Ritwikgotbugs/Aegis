const simpleGit = require("simple-git");
const fs = require("fs");

// Clone the GitHub repository to a local directory
const repoUrl = "https://github.com/example/repository.git";
const localPath = "./cloned_repository";

simpleGit().clone(repoUrl, localPath, (error, result) => {
  if (error) {
    console.error("Error cloning repository:", error);
    return;
  }

  console.log("Repository cloned successfully");

  // Function to compare files line by line
  const compareFiles = (file1, file2) => {
    const content1 = fs.readFileSync(file1, "utf-8").split("\n");
    const content2 = fs.readFileSync(file2, "utf-8").split("\n");

    for (let i = 0; i < Math.max(content1.length, content2.length); i++) {
      if (content1[i] !== content2[i]) {
        console.log("Difference found in ${file1} at line ${i+1}:");
        console.log("- ${content1[i]}");
        console.log("+ ${content2[i]}");
      }
    }
  };

  // Iterate through each file in the cloned repository
  fs.readdirSync(localPath).forEach((file) => {
    // Skip directories
    if (!fs.lstatSync(localPath + "/" + file).isDirectory()) {
      // Compare each file with your dataset
      compareFiles(localPath + "/" + file, "<path_to_your_dataset_file>");
    }
  });
});
