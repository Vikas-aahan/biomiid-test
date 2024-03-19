import React from "react";
import Style from "../../Css/home.module.css";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { postApihandler } from "../../apiHandler";
import { ClientJS } from "clientjs";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Swal from "sweetalert2";

const countryCodeList = [
  {
    code: "AF",
    countryFlag: "🇦🇫",
    phoneCode: 93,
    countryName: "Afghanistan",
  },
  {
    code: "AL",
    countryFlag: "🇦🇱",
    phoneCode: 355,
    countryName: "Albania",
  },
  {
    code: "DZ",
    countryFlag: "🇩🇿",
    phoneCode: 213,
    countryName: "Algeria",
  },
  {
    code: "AS",
    countryFlag: "🇦🇸",
    phoneCode: 1684,
    countryName: "American Samoa",
  },
  {
    code: "AD",
    countryFlag: "🇦🇩",
    phoneCode: 376,
    countryName: "Andorra",
  },
  {
    code: "AO",
    countryFlag: "🇦🇴",
    phoneCode: 244,
    countryName: "Angola",
  },
  {
    code: "AI",
    countryFlag: "🇦🇮",
    phoneCode: 1264,
    countryName: "Anguilla",
  },
  {
    code: "AQ",
    countryFlag: "🇦🇶",
    phoneCode: 0,
    countryName: "Antarctica",
  },
  {
    code: "AR",
    countryFlag: "🇦🇷",
    phoneCode: 54,
    countryName: "Argentina",
  },
  {
    code: "AM",
    countryFlag: "🇦🇲",
    phoneCode: 374,
    countryName: "Armenia",
  },
  {
    code: "AW",
    countryFlag: "🇦🇼",
    phoneCode: 297,
    countryName: "Aruba",
  },
  {
    code: "AU",
    countryFlag: "🇦🇺",
    phoneCode: 61,
    countryName: "Australia",
  },
  {
    code: "AT",
    countryFlag: "🇦🇹",
    phoneCode: 43,
    countryName: "Austria",
  },
  {
    code: "AZ",
    countryFlag: "🇦🇿",
    phoneCode: 994,
    countryName: "Azerbaijan",
  },
  {
    code: "BH",
    countryFlag: "🇧🇭",
    phoneCode: 973,
    countryName: "Bahrain",
  },
  {
    code: "BD",
    countryFlag: "🇧🇩",
    phoneCode: 880,
    countryName: "Bangladesh",
  },
  {
    code: "BB",
    countryFlag: "🇧🇧",
    phoneCode: 1246,
    countryName: "Barbados",
  },
  {
    code: "BY",
    countryFlag: "🇧🇾",
    phoneCode: 375,
    countryName: "Belarus",
  },
  {
    code: "BE",
    countryFlag: "🇧🇪",
    phoneCode: 32,
    countryName: "Belgium",
  },
  {
    code: "BZ",
    countryFlag: "🇧🇿",
    phoneCode: 501,
    countryName: "Belize",
  },
  {
    code: "BJ",
    countryFlag: "🇧🇯",
    phoneCode: 229,
    countryName: "Benin",
  },
  {
    code: "BM",
    countryFlag: "🇧🇲",
    phoneCode: 1441,
    countryName: "Bermuda",
  },
  {
    code: "BT",
    countryFlag: "🇧🇹",
    phoneCode: 975,
    countryName: "Bhutan",
  },
  {
    code: "BO",
    countryFlag: "🇧🇴",
    phoneCode: 591,
    countryName: "Bolivia",
  },
  {
    code: "BW",
    countryFlag: "🇧🇼",
    phoneCode: 267,
    countryName: "Botswana",
  },
  {
    code: "BV",
    countryFlag: "🇧🇻",
    phoneCode: 0,
    countryName: "Bouvet Island",
  },
  {
    code: "BR",
    countryFlag: "🇧🇷",
    phoneCode: 55,
    countryName: "Brazil",
  },
  {
    code: "IO",
    countryFlag: "🇮🇴",
    phoneCode: 246,
    countryName: "British Indian Ocean Territory",
  },
  {
    code: "BN",
    countryFlag: "🇧🇳",
    phoneCode: 673,
    countryName: "Brunei",
  },
  {
    code: "BG",
    countryFlag: "🇧🇬",
    phoneCode: 359,
    countryName: "Bulgaria",
  },
  {
    code: "BF",
    countryFlag: "🇧🇫",
    phoneCode: 226,
    countryName: "Burkina Faso",
  },
  {
    code: "BI",
    countryFlag: "🇧🇮",
    phoneCode: 257,
    countryName: "Burundi",
  },
  {
    code: "KH",
    countryFlag: "🇰🇭",
    phoneCode: 855,
    countryName: "Cambodia",
  },
  {
    code: "CM",
    countryFlag: "🇨🇲",
    phoneCode: 237,
    countryName: "Cameroon",
  },
  {
    code: "CA",
    countryFlag: "🇨🇦",
    phoneCode: 1,
    countryName: "Canada",
  },
  {
    code: "CV",
    countryFlag: "🇨🇻",
    phoneCode: 238,
    countryName: "Cape Verde",
  },
  {
    code: "KY",
    countryFlag: "🇰🇾",
    phoneCode: 1345,
    countryName: "Cayman Islands",
  },
  {
    code: "CF",
    countryFlag: "🇨🇫",
    phoneCode: 236,
    countryName: "Central African Republic",
  },
  {
    code: "TD",
    countryFlag: "🇹🇩",
    phoneCode: 235,
    countryName: "Chad",
  },
  {
    code: "CL",
    countryFlag: "🇨🇱",
    phoneCode: 56,
    countryName: "Chile",
  },
  {
    code: "CN",
    countryFlag: "🇨🇳",
    phoneCode: 86,
    countryName: "China",
  },
  {
    code: "CX",
    countryFlag: "🇨🇽",
    phoneCode: 61,
    countryName: "Christmas Island",
  },
  {
    code: "CC",
    countryFlag: "🇨🇨",
    phoneCode: 672,
    countryName: "Cocos (Keeling) Islands",
  },
  {
    code: "CO",
    countryFlag: "🇨🇴",
    phoneCode: 57,
    countryName: "Colombia",
  },
  {
    code: "KM",
    countryFlag: "🇰🇲",
    phoneCode: 269,
    countryName: "Comoros",
  },
  {
    code: "CK",
    countryFlag: "🇨🇰",
    phoneCode: 682,
    countryName: "Cook Islands",
  },
  {
    code: "CR",
    countryFlag: "🇨🇷",
    phoneCode: 506,
    countryName: "Costa Rica",
  },
  {
    code: "CU",
    countryFlag: "🇨🇺",
    phoneCode: 53,
    countryName: "Cuba",
  },
  {
    code: "CY",
    countryFlag: "🇨🇾",
    phoneCode: 357,
    countryName: "Cyprus",
  },
  {
    code: "DK",
    countryFlag: "🇩🇰",
    phoneCode: 45,
    countryName: "Denmark",
  },
  {
    code: "DJ",
    countryFlag: "🇩🇯",
    phoneCode: 253,
    countryName: "Djibouti",
  },
  {
    code: "DM",
    countryFlag: "🇩🇲",
    phoneCode: 1767,
    countryName: "Dominica",
  },
  {
    code: "DO",
    countryFlag: "🇩🇴",
    phoneCode: 1809,
    countryName: "Dominican Republic",
  },
  {
    code: "EC",
    countryFlag: "🇪🇨",
    phoneCode: 593,
    countryName: "Ecuador",
  },
  {
    code: "EG",
    countryFlag: "🇪🇬",
    phoneCode: 20,
    countryName: "Egypt",
  },
  {
    code: "SV",
    countryFlag: "🇸🇻",
    phoneCode: 503,
    countryName: "El Salvador",
  },
  {
    code: "GQ",
    countryFlag: "🇬🇶",
    phoneCode: 240,
    countryName: "Equatorial Guinea",
  },
  {
    code: "ER",
    countryFlag: "🇪🇷",
    phoneCode: 291,
    countryName: "Eritrea",
  },
  {
    code: "EE",
    countryFlag: "🇪🇪",
    phoneCode: 372,
    countryName: "Estonia",
  },
  {
    code: "ET",
    countryFlag: "🇪🇹",
    phoneCode: 251,
    countryName: "Ethiopia",
  },
  {
    code: "FK",
    countryFlag: "🇫🇰",
    phoneCode: 500,
    countryName: "Falkland Islands",
  },
  {
    code: "FO",
    countryFlag: "🇫🇴",
    phoneCode: 298,
    countryName: "Faroe Islands",
  },
  {
    code: "FI",
    countryFlag: "🇫🇮",
    phoneCode: 358,
    countryName: "Finland",
  },
  {
    code: "FR",
    countryFlag: "🇫🇷",
    phoneCode: 33,
    countryName: "France",
  },
  {
    code: "GF",
    countryFlag: "🇬🇫",
    phoneCode: 594,
    countryName: "French Guiana",
  },
  {
    code: "PF",
    countryFlag: "🇵🇫",
    phoneCode: 689,
    countryName: "French Polynesia",
  },
  {
    code: "TF",
    countryFlag: "🇹🇫",
    phoneCode: 0,
    countryName: "French Southern Territories",
  },
  {
    code: "GA",
    countryFlag: "🇬🇦",
    phoneCode: 241,
    countryName: "Gabon",
  },
  {
    code: "GE",
    countryFlag: "🇬🇪",
    phoneCode: 995,
    countryName: "Georgia",
  },
  {
    code: "DE",
    countryFlag: "🇩🇪",
    phoneCode: 49,
    countryName: "Germany",
  },
  {
    code: "GH",
    countryFlag: "🇬🇭",
    phoneCode: 233,
    countryName: "Ghana",
  },
  {
    code: "GI",
    countryFlag: "🇬🇮",
    phoneCode: 350,
    countryName: "Gibraltar",
  },
  {
    code: "GR",
    countryFlag: "🇬🇷",
    phoneCode: 30,
    countryName: "Greece",
  },
  {
    code: "GL",
    countryFlag: "🇬🇱",
    phoneCode: 299,
    countryName: "Greenland",
  },
  {
    code: "GD",
    countryFlag: "🇬🇩",
    phoneCode: 1473,
    countryName: "Grenada",
  },
  {
    code: "GP",
    countryFlag: "🇬🇵",
    phoneCode: 590,
    countryName: "Guadeloupe",
  },
  {
    code: "GU",
    countryFlag: "🇬🇺",
    phoneCode: 1671,
    countryName: "Guam",
  },
  {
    code: "GT",
    countryFlag: "🇬🇹",
    phoneCode: 502,
    countryName: "Guatemala",
  },
  {
    code: "GN",
    countryFlag: "🇬🇳",
    phoneCode: 224,
    countryName: "Guinea",
  },
  {
    code: "GW",
    countryFlag: "🇬🇼",
    phoneCode: 245,
    countryName: "Guinea-Bissau",
  },
  {
    code: "GY",
    countryFlag: "🇬🇾",
    phoneCode: 592,
    countryName: "Guyana",
  },
  {
    code: "HT",
    countryFlag: "🇭🇹",
    phoneCode: 509,
    countryName: "Haiti",
  },
  {
    code: "HN",
    countryFlag: "🇭🇳",
    phoneCode: 504,
    countryName: "Honduras",
  },
  {
    code: "HU",
    countryFlag: "🇭🇺",
    phoneCode: 36,
    countryName: "Hungary",
  },
  {
    code: "IS",
    countryFlag: "🇮🇸",
    phoneCode: 354,
    countryName: "Iceland",
  },
  {
    code: "IN",
    countryFlag: "🇮🇳",
    phoneCode: 91,
    countryName: "India",
  },
  {
    code: "ID",
    countryFlag: "🇮🇩",
    phoneCode: 62,
    countryName: "Indonesia",
  },
  {
    code: "IR",
    countryFlag: "🇮🇷",
    phoneCode: 98,
    countryName: "Iran",
  },
  {
    code: "IQ",
    countryFlag: "🇮🇶",
    phoneCode: 964,
    countryName: "Iraq",
  },
  {
    code: "IE",
    countryFlag: "🇮🇪",
    phoneCode: 353,
    countryName: "Ireland",
  },
  {
    code: "IL",
    countryFlag: "🇮🇱",
    phoneCode: 972,
    countryName: "Israel",
  },
  {
    code: "IT",
    countryFlag: "🇮🇹",
    phoneCode: 39,
    countryName: "Italy",
  },
  {
    code: "JM",
    countryFlag: "🇯🇲",
    phoneCode: 1876,
    countryName: "Jamaica",
  },
  {
    code: "JP",
    countryFlag: "🇯🇵",
    phoneCode: 81,
    countryName: "Japan",
  },
  {
    code: "JO",
    countryFlag: "🇯🇴",
    phoneCode: 962,
    countryName: "Jordan",
  },
  {
    code: "KZ",
    countryFlag: "🇰🇿",
    phoneCode: 7,
    countryName: "Kazakhstan",
  },
  {
    code: "KE",
    countryFlag: "🇰🇪",
    phoneCode: 254,
    countryName: "Kenya",
  },
  {
    code: "KI",
    countryFlag: "🇰🇮",
    phoneCode: 686,
    countryName: "Kiribati",
  },
  {
    code: "KW",
    countryFlag: "🇰🇼",
    phoneCode: 965,
    countryName: "Kuwait",
  },
  {
    code: "KG",
    countryFlag: "🇰🇬",
    phoneCode: 996,
    countryName: "Kyrgyzstan",
  },
  {
    code: "LA",
    countryFlag: "🇱🇦",
    phoneCode: 856,
    countryName: "Laos",
  },
  {
    code: "LV",
    countryFlag: "🇱🇻",
    phoneCode: 371,
    countryName: "Latvia",
  },
  {
    code: "LB",
    countryFlag: "🇱🇧",
    phoneCode: 961,
    countryName: "Lebanon",
  },
  {
    code: "LS",
    countryFlag: "🇱🇸",
    phoneCode: 266,
    countryName: "Lesotho",
  },
  {
    code: "LR",
    countryFlag: "🇱🇷",
    phoneCode: 231,
    countryName: "Liberia",
  },
  {
    code: "LY",
    countryFlag: "🇱🇾",
    phoneCode: 218,
    countryName: "Libya",
  },
  {
    code: "LI",
    countryFlag: "🇱🇮",
    phoneCode: 423,
    countryName: "Liechtenstein",
  },
  {
    code: "LT",
    countryFlag: "🇱🇹",
    phoneCode: 370,
    countryName: "Lithuania",
  },
  {
    code: "LU",
    countryFlag: "🇱🇺",
    phoneCode: 352,
    countryName: "Luxembourg",
  },
  {
    code: "MK",
    countryFlag: "🇲🇰",
    phoneCode: 389,
    countryName: "Macedonia",
  },
  {
    code: "MG",
    countryFlag: "🇲🇬",
    phoneCode: 261,
    countryName: "Madagascar",
  },
  {
    code: "MW",
    countryFlag: "🇲🇼",
    phoneCode: 265,
    countryName: "Malawi",
  },
  {
    code: "MY",
    countryFlag: "🇲🇾",
    phoneCode: 60,
    countryName: "Malaysia",
  },
  {
    code: "MV",
    countryFlag: "🇲🇻",
    phoneCode: 960,
    countryName: "Maldives",
  },
  {
    code: "ML",
    countryFlag: "🇲🇱",
    phoneCode: 223,
    countryName: "Mali",
  },
  {
    code: "MT",
    countryFlag: "🇲🇹",
    phoneCode: 356,
    countryName: "Malta",
  },
  {
    code: "MH",
    countryFlag: "🇲🇭",
    phoneCode: 692,
    countryName: "Marshall Islands",
  },
  {
    code: "MQ",
    countryFlag: "🇲🇶",
    phoneCode: 596,
    countryName: "Martinique",
  },
  {
    code: "MR",
    countryFlag: "🇲🇷",
    phoneCode: 222,
    countryName: "Mauritania",
  },
  {
    code: "MU",
    countryFlag: "🇲🇺",
    phoneCode: 230,
    countryName: "Mauritius",
  },
  {
    code: "YT",
    countryFlag: "🇾🇹",
    phoneCode: 269,
    countryName: "Mayotte",
  },
  {
    code: "MX",
    countryFlag: "🇲🇽",
    phoneCode: 52,
    countryName: "Mexico",
  },
  {
    code: "FM",
    countryFlag: "🇫🇲",
    phoneCode: 691,
    countryName: "Micronesia",
  },
  {
    code: "MD",
    countryFlag: "🇲🇩",
    phoneCode: 373,
    countryName: "Moldova",
  },
  {
    code: "MC",
    countryFlag: "🇲🇨",
    phoneCode: 377,
    countryName: "Monaco",
  },
  {
    code: "MN",
    countryFlag: "🇲🇳",
    phoneCode: 976,
    countryName: "Mongolia",
  },
  {
    code: "MS",
    countryFlag: "🇲🇸",
    phoneCode: 1664,
    countryName: "Montserrat",
  },
  {
    code: "MA",
    countryFlag: "🇲🇦",
    phoneCode: 212,
    countryName: "Morocco",
  },
  {
    code: "MZ",
    countryFlag: "🇲🇿",
    phoneCode: 258,
    countryName: "Mozambique",
  },
  {
    code: "NA",
    countryFlag: "🇳🇦",
    phoneCode: 264,
    countryName: "Namibia",
  },
  {
    code: "NR",
    countryFlag: "🇳🇷",
    phoneCode: 674,
    countryName: "Nauru",
  },
  {
    code: "NP",
    countryFlag: "🇳🇵",
    phoneCode: 977,
    countryName: "Nepal",
  },
  {
    code: "NC",
    countryFlag: "🇳🇨",
    phoneCode: 687,
    countryName: "New Caledonia",
  },
  {
    code: "NZ",
    countryFlag: "🇳🇿",
    phoneCode: 64,
    countryName: "New Zealand",
  },
  {
    code: "NI",
    countryFlag: "🇳🇮",
    phoneCode: 505,
    countryName: "Nicaragua",
  },
  {
    code: "NE",
    countryFlag: "🇳🇪",
    phoneCode: 227,
    countryName: "Niger",
  },
  {
    code: "NG",
    countryFlag: "🇳🇬",
    phoneCode: 234,
    countryName: "Nigeria",
  },
  {
    code: "NU",
    countryFlag: "🇳🇺",
    phoneCode: 683,
    countryName: "Niue",
  },
  {
    code: "NF",
    countryFlag: "🇳🇫",
    phoneCode: 672,
    countryName: "Norfolk Island",
  },
  {
    code: "MP",
    countryFlag: "🇲🇵",
    phoneCode: 1670,
    countryName: "Northern Mariana Islands",
  },
  {
    code: "NO",
    countryFlag: "🇳🇴",
    phoneCode: 47,
    countryName: "Norway",
  },
  {
    code: "OM",
    countryFlag: "🇴🇲",
    phoneCode: 968,
    countryName: "Oman",
  },
  {
    code: "PK",
    countryFlag: "🇵🇰",
    phoneCode: 92,
    countryName: "Pakistan",
  },
  {
    code: "PW",
    countryFlag: "🇵🇼",
    phoneCode: 680,
    countryName: "Palau",
  },
  {
    code: "PA",
    countryFlag: "🇵🇦",
    phoneCode: 507,
    countryName: "Panama",
  },
  {
    code: "PY",
    countryFlag: "🇵🇾",
    phoneCode: 595,
    countryName: "Paraguay",
  },
  {
    code: "PE",
    countryFlag: "🇵🇪",
    phoneCode: 51,
    countryName: "Peru",
  },
  {
    code: "PH",
    countryFlag: "🇵🇭",
    phoneCode: 63,
    countryName: "Philippines",
  },
  {
    code: "PL",
    countryFlag: "🇵🇱",
    phoneCode: 48,
    countryName: "Poland",
  },
  {
    code: "PT",
    countryFlag: "🇵🇹",
    phoneCode: 351,
    countryName: "Portugal",
  },
  {
    code: "PR",
    countryFlag: "🇵🇷",
    phoneCode: 1787,
    countryName: "Puerto Rico",
  },
  {
    code: "QA",
    countryFlag: "🇶🇦",
    phoneCode: 974,
    countryName: "Qatar",
  },
  {
    code: "RO",
    countryFlag: "🇷🇴",
    phoneCode: 40,
    countryName: "Romania",
  },
  {
    code: "RU",
    countryFlag: "🇷🇺",
    phoneCode: 70,
    countryName: "Russia",
  },
  {
    code: "RW",
    countryFlag: "🇷🇼",
    phoneCode: 250,
    countryName: "Rwanda",
  },
  {
    code: "WS",
    countryFlag: "🇼🇸",
    phoneCode: 684,
    countryName: "Samoa",
  },
  {
    code: "SM",
    countryFlag: "🇸🇲",
    phoneCode: 378,
    countryName: "San Marino",
  },
  {
    code: "SA",
    countryFlag: "🇸🇦",
    phoneCode: 966,
    countryName: "Saudi Arabia",
  },
  {
    code: "SN",
    countryFlag: "🇸🇳",
    phoneCode: 221,
    countryName: "Senegal",
  },
  {
    code: "RS",
    countryFlag: "🇷🇸",
    phoneCode: 381,
    countryName: "Serbia",
  },
  {
    code: "SC",
    countryFlag: "🇸🇨",
    phoneCode: 248,
    countryName: "Seychelles",
  },
  {
    code: "SL",
    countryFlag: "🇸🇱",
    phoneCode: 232,
    countryName: "Sierra Leone",
  },
  {
    code: "SG",
    countryFlag: "🇸🇬",
    phoneCode: 65,
    countryName: "Singapore",
  },
  {
    code: "SK",
    countryFlag: "🇸🇰",
    phoneCode: 421,
    countryName: "Slovakia",
  },
  {
    code: "SI",
    countryFlag: "🇸🇮",
    phoneCode: 386,
    countryName: "Slovenia",
  },
  {
    code: "SB",
    countryFlag: "🇸🇧",
    phoneCode: 677,
    countryName: "Solomon Islands",
  },
  {
    code: "SO",
    countryFlag: "🇸🇴",
    phoneCode: 252,
    countryName: "Somalia",
  },
  {
    code: "ZA",
    countryFlag: "🇿🇦",
    phoneCode: 27,
    countryName: "South Africa",
  },
  {
    code: "SS",
    countryFlag: "🇸🇸",
    phoneCode: 211,
    countryName: "South Sudan",
  },
  {
    code: "ES",
    countryFlag: "🇪🇸",
    phoneCode: 34,
    countryName: "Spain",
  },
  {
    code: "LK",
    countryFlag: "🇱🇰",
    phoneCode: 94,
    countryName: "Sri Lanka",
  },
  {
    code: "SD",
    countryFlag: "🇸🇩",
    phoneCode: 249,
    countryName: "Sudan",
  },
  {
    code: "SR",
    countryFlag: "🇸🇷",
    phoneCode: 597,
    countryName: "Suriname",
  },
  {
    code: "SZ",
    countryFlag: "🇸🇿",
    phoneCode: 268,
    countryName: "Swaziland",
  },
  {
    code: "SE",
    countryFlag: "🇸🇪",
    phoneCode: 46,
    countryName: "Sweden",
  },
  {
    code: "CH",
    countryFlag: "🇨🇭",
    phoneCode: 41,
    countryName: "Switzerland",
  },
  {
    code: "SY",
    countryFlag: "🇸🇾",
    phoneCode: 963,
    countryName: "Syria",
  },
  {
    code: "TW",
    countryFlag: "🇹🇼",
    phoneCode: 886,
    countryName: "Taiwan",
  },
  {
    code: "TJ",
    countryFlag: "🇹🇯",
    phoneCode: 992,
    countryName: "Tajikistan",
  },
  {
    code: "TZ",
    countryFlag: "🇹🇿",
    phoneCode: 255,
    countryName: "Tanzania",
  },
  {
    code: "TH",
    countryFlag: "🇹🇭",
    phoneCode: 66,
    countryName: "Thailand",
  },
  {
    code: "TG",
    countryFlag: "🇹🇬",
    phoneCode: 228,
    countryName: "Togo",
  },
  {
    code: "TK",
    countryFlag: "🇹🇰",
    phoneCode: 690,
    countryName: "Tokelau",
  },
  {
    code: "TO",
    countryFlag: "🇹🇴",
    phoneCode: 676,
    countryName: "Tonga",
  },
  {
    code: "TN",
    countryFlag: "🇹🇳",
    phoneCode: 216,
    countryName: "Tunisia",
  },
  {
    code: "TR",
    countryFlag: "🇹🇷",
    phoneCode: 90,
    countryName: "Turkey",
  },
  {
    code: "TM",
    countryFlag: "🇹🇲",
    phoneCode: 7370,
    countryName: "Turkmenistan",
  },
  {
    code: "TV",
    countryFlag: "🇹🇻",
    phoneCode: 688,
    countryName: "Tuvalu",
  },
  {
    code: "UG",
    countryFlag: "🇺🇬",
    phoneCode: 256,
    countryName: "Uganda",
  },
  {
    code: "UA",
    countryFlag: "🇺🇦",
    phoneCode: 380,
    countryName: "Ukraine",
  },
  {
    code: "AE",
    countryFlag: "🇦🇪",
    phoneCode: 971,
    countryName: "United Arab Emirates",
  },
  {
    code: "GB",
    countryFlag: "🇬🇧",
    phoneCode: 44,
    countryName: "United Kingdom",
  },
  {
    code: "US",
    countryFlag: "🇺🇸",
    phoneCode: 1,
    countryName: "United States",
  },
  {
    code: "UY",
    countryFlag: "🇺🇾",
    phoneCode: 598,
    countryName: "Uruguay",
  },
  {
    code: "UZ",
    countryFlag: "🇺🇿",
    phoneCode: 998,
    countryName: "Uzbekistan",
  },
  {
    code: "VU",
    countryFlag: "🇻🇺",
    phoneCode: 678,
    countryName: "Vanuatu",
  },
  {
    code: "VE",
    countryFlag: "🇻🇪",
    phoneCode: 58,
    countryName: "Venezuela",
  },
  {
    code: "VN",
    countryFlag: "🇻🇳",
    phoneCode: 84,
    countryName: "Vietnam",
  },
  {
    code: "EH",
    countryFlag: "🇪🇭",
    phoneCode: 212,
    countryName: "Western Sahara",
  },
  {
    code: "YE",
    countryFlag: "🇾🇪",
    phoneCode: 967,
    countryName: "Yemen",
  },
  {
    code: "ZM",
    countryFlag: "🇿🇲",
    phoneCode: 260,
    countryName: "Zambia",
  },
  {
    code: "ZW",
    countryFlag: "🇿🇼",
    phoneCode: 26,
    countryName: "Zimbabwe",
  },
];
const client = new ClientJS();
export default function ContactUs() {
  const [value1, setValue] = React.useState("");
  const { register, handleSubmit, reset } = useForm();
  const [phone, setPhone] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (value) => {
    const {
      companyName,
      firstName,
      lastName,
      email,
      country,
      comment,
     
    } = value;
    if (value1 === "CAREERS") {
      const data = {
        contactType: value1,
        eventMode: "INDIVIDUAL",
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phone,
        country: country,
        comment: comment,
        deviceTimezone: client.getTimeZone(),
      };
      console.log("===>", data);
      let res = await postApihandler("/contact", data);
      console.log("res===>", res);
      if(res.status === 200){
        Swal.fire({
          position: "middle-centre",
          icon: "success",
          title: "Contact Add Successfully",
          showConfirmButton: false,
          timer: 3000,
        });   
      }else if(res.error.response.status === 410) {
        Swal.fire({
          position: "middle-centre",
          icon: "error",
          title: res.error.response.data.message,
          showConfirmButton: false,
          timer: 3000,
        });   
      } else if(res.error.response.status === 433){
        Swal.fire({
          position: "middle-centre",
          icon: "error",
          title: "Deny  access",
          showConfirmButton: false,
          timer: 3000,
        }); 
      }

    } else {
      const data = {
        contactType: value1,
        eventMode: "BUSINESS",
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phone,
        country: country,
        comment: comment,
        companyName: companyName,
        deviceTimezone: "Asia/Kolkata",
      };
      console.log("===>", data);
      let res = await postApihandler("/contact", data);
      console.log("res===>", res);
    }
  };
  return (
    <div className={Style.outer_div_contact} id="contact">
      <br />
      <br />
      <Typography className={Style.solution_heading_dif}>Contact Us</Typography>
      <br />
      <br />
      <br />
      <br />
      <div sx={{ textAlign: "-webkit-center" }}>
        <Card variant="outlined" className={Style.contact_card}>
          <Typography className={Style.contact_heading}>
            Get in touch
          </Typography>
          <Typography className={Style.contact_text}>
            Simply fill out this form and we will respond to you shortly.
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container className={Style.contact_form_outer_grid}>
              <Grid lg={12} md={12} xs={12} sx={{ display: "flex" }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    className={Style.contact_radio_outer}
                    name="radio-buttons-group"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="SALES"
                      control={
                        <Radio
                          color="default"
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 32,
                            },
                          }}
                        />
                      }
                      label="Sales"
                    />
                    <FormControlLabel
                      value="SUPPORT"
                      control={
                        <Radio
                          color="default"
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 32,
                            },
                          }}
                        />
                      }
                      label="Support"
                    />
                    <FormControlLabel
                      value="RELYING PARTY PARTNER"
                      control={
                        <Radio
                          color="default"
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 32,
                            },
                          }}
                        />
                      }
                      label="Relying Party Partner"
                    />
                    <FormControlLabel
                      value="CAREERS"
                      control={
                        <Radio
                          color="default"
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 32,
                            },
                          }}
                        />
                      }
                      label="Careers"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {value1 === "CAREERS" ? (
                ""
              ) : (
                <Grid lg={12} md={12} xs={12}>
                  <Typography sx={{ textAlign: "start" }}>
                    Company name*
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    name="companyName"
                    {...register("companyName")}
                  />
                </Grid>
              )}

              <Grid lg={5.5} md={5.5} xs={12}>
                {" "}
                <Typography sx={{ textAlign: "start" }}>First name*</Typography>
                <TextField
                  fullWidth
                  type="text"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  name="firstName"
                  {...register("firstName")}
                />
              </Grid>
              <Grid lg={5.5} md={5.5} xs={12}>
                {" "}
                <Typography sx={{ textAlign: "start" }}>Last name*</Typography>
                <TextField
                  fullWidth
                  type="text"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  name="lastName"
                  {...register("lastName")}
                />
              </Grid>
              <Grid lg={12} md={12} xs={12}>
                <Typography sx={{ textAlign: "start" }}>E-mail*</Typography>
                <TextField
                  fullWidth
                  type="email"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  name="email"
                  {...register("email")}
                />
              </Grid>
              <Grid lg={5.5} md={5.5} xs={12}>
                {" "}
                <Typography sx={{ textAlign: "start" }}>Phone*</Typography>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <PhoneInput
                    defaultCountry="ua"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    style={{ width: "44rem", height: "3rem" }}
                  />
                </div>
              </Grid>
              <Grid lg={5.5} md={5.5} xs={12}>
                {" "}
                <Typography sx={{ textAlign: "start" }}>Country*</Typography>
                <select
                  name="country"
                  {...register("country")}
                  style={{
                    height: "38px",
                    fontSize: "16px",
                    color: "gray",
                    width: "100%",
                  }}
                >
                  <option value="France">France</option>
                  {countryCodeList.map((val, ind) => {
                    return (
                      <option value={val.code} key={ind}>
                        {val.countryName}
                      </option>
                    );
                  })}
                </select>
              </Grid>
              <Grid lg={12} md={12} xs={12}>
                <Typography sx={{ textAlign: "start" }}>
                  Tell us about your interest : *
                </Typography> 
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={6}
                  name="comment"
                  {...register("comment")}
                />
              </Grid>
            </Grid>

            <FormControlLabel
              sx={{ display: "flex" }}
              control={
                <Checkbox
                  value="allowExtraEmails"
                  color="primary"
                />
              }
              label="I agree to receive emails about products, services, and/or promotions from BIOMIID, and its affiliates"
            />
            <Typography sx={{ textAlign: "start" }}>
              By clicking “Submit” I hereby confirm that the information I have
              supplied is true, accurate, and complete.To learn how BIOMIID
              processes personal data, see our &nbsp;
              <span style={{ color: "cornflowerblue" }}>Privacy Policy</span>
            </Typography>
            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={Style.contact_button}
            >
              Submit
            </Button>
          </Box>
          <br />
          <br />
          <br />
        </Card>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
