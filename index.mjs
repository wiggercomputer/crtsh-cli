#! /usr/bin/env node

import fs from "fs";
import axios from "axios";
import cheerio from "cheerio";
import arg from "arg";

const main = async () => {
  const args = arg({
    "--domain": String,
    "--help": Boolean,
    "--output": String,
    "-d": "--domain",
    "-h": "--help",
    "-o": "--output",
  });

  if (args["--help"]) {
    console.log("Usage: csh --domain <domain> [--output <output-file>]");
    return;
  }

  if (!args["--domain"]) {
    console.error("Please provide a domain");
    console.log("Usage: csh --domain <domain> [--output <output-file>]");
    return;
  }

  const domain = args["--domain"];
  const url = `https://crt.sh/?q=${domain}`;
  const output = args["--output"];

  axios.get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      let tdValues = [];

      $("tr").each((index, element) => {
        const tds = $(element).find("td");
        if (tds.length >= 5) {
          const value = $(tds[4]).text().trim();
          tdValues.push(value);
        }
      });

      tdValues =  [...new Set(tdValues)];
      tdValues.shift();

      if (output) {
        fs.writeFile(output, tdValues.join("\n"), (err) => {
          if (err) {
            console.error("Error writing to file", err);
          } else {
            console.log("File has been saved");
          }
        });
      } else {
        console.log(tdValues.join("\n"));
      }
    })
    .catch((error) => {
      console.error("Error fetching the URL", error);
    });
};

main();
