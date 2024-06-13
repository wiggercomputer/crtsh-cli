# crt.sh CLI (crtsh-cli)

## Overview

(`crtsh-cli`) is a very simple Node.js script that fetches data from [crt.sh](https://crt.sh) for a given domain. It extracts specific table data from the webpage, processes it, and either displays the results in the console or saves them to a specified output file.

## Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)

## Installation
```bash
npm i -g crtsh-cli
```

## Usage

### Command Line Options

- `--domain`, `-d`: Specifies the domain to search for.
- `--output`, `-o`: (Optional) Specifies the output file to save the results.
- `--help`, `-h`: Displays the help message.

### Examples

1. Displaying results in the console (helpful to pipe results):

   ```bash
   crtsh -d example.com
   ```

2. Saving results to a file:

   ```bash
   crtsh -d example.com -o domains.txt
   ```

3. Displaying the help message:

   ```bash
   crtsh --help
   ```

## Development

1. Clone this repository or download the script.

   ```bash
   git clone https://github.com/wiggercomputer/crtsh-cli
   cd crtsh-cli
   ```

2. Install the necessary dependencies.

   ```bash
   npm i 
   ```

### Script Explanation

1. **Argument Parsing**: The script uses the `arg` library to parse command line arguments.
2. **Fetching Data**: It makes a GET request to `crt.sh` for the specified domain using `axios`.
3. **Data Extraction**: The script uses `cheerio` to load the HTML and extract the desired table data.
4. **Output**: The extracted data is either printed to the console or saved to a file, based on user input.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): For making HTTP requests.
- [cheerio](https://www.npmjs.com/package/cheerio): For parsing HTML and extracting data.
- [arg](https://www.npmjs.com/package/arg): For parsing command line arguments.

## License

This project is licensed under the MIT License.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are welcome but I don't really expect any.

## Issues

If you encounter any issues or have suggestions, please open an issue in this repository.

---

Feel free to reach out if you have any questions or need further assistance.
