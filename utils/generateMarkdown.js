function generateMarkdown(data) {
    return `
    #${data.Title}

    ##Description
    ${data.Description}

    ##Installation
    ${data.InstallationProcess}

    ##Usage
    ${data.UsageInformation}

    ##License
    ${data.License}

    ##Contributions
    ${data.Contributors}

    ## Tests
    ${data.Tests}

    ## Questions
    GitHub: ${data.GitHubUsername}
    Email: ${data.EmailAddress}

    `
}

module.exports = generateMarkdown;