// Initialize the map
var map = L.map('map', {
    center: [20, 0], // Centered at [lat, lng]
    zoom: 2, // Zoom level 2
    worldCopyJump: true // Enable infinite horizontal looping
});

// Add a tile layer to the map (OpenStreetMap tiles) https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


map.on('drag', function(e) {
    var bounds = map.getBounds();
    var center = map.getCenter();
    var minLat = bounds.getSouthWest().lat;
    var maxLat = bounds.getNorthEast().lat;
    var newLat = center.lat;
    var newLng = center.lng;

    // Constrain latitude to prevent vertical scrolling
    if (minLat < -85 || maxLat > 85) {
        newLat = map.options.center[0];
    }

    map.setView([newLat, newLng], map.getZoom(), { animate: false });
});









// Example MVP data with name, picture, category, MVP year, and LinkedIn profile
var mvps = [
    { 
        
        lat: 8.7139,
        lng: 77.7567, 
        name: 'Mohamed Azarudeen Z', 
        picture: 'images/samp.jpg', 
        category: 'Azure openAI and AI services', 
        year: '2024', 
        linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6fdb6a3c-c9a5-4e03-99f2-be8e1fdf4e75' 
    },
    { 
        lat: 13.0827,
        lng: 80.2707,
        name: 'Janarthanan selvaraj', 
        picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e2577bfe-6945-46b0-92ea-3a6d5b0b51fb?638533698118289499', 
        category: 'AI Services', 
        year: '2024', 
        linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e2577bfe-6945-46b0-92ea-3a6d5b0b51fb' 
    },
    
      { 
         lat: 17.6868,
        lng: 83.2185,
            name: 'Chenchappagari Prathap Reddy', 
            picture: 'images/prathap.png', 
            category: 'Ai and machine learning', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/cc18234b-2305-470f-9624-1dd92dd55d3a' 
        },
        { 
            lat: 16.5062,
            lng: 80.6480,
            name: 'Divya Akula', 
            picture: 'images/divya.png', 
            category: 'Responsible AI with Azure', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4a3a580e-34ca-4df4-9f81-b7adaa2e79da' 
        },
        { 
            lat: 28.7041,
lng: 77.1025,
            name: 'Aarpita Das', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/98c7ee00-fc49-4f1a-b7a4-66edfb6f2b5f?638480890777850042', 
            category: 'Azure AI services', 
            year: '2023', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/98c7ee00-fc49-4f1a-b7a4-66edfb6f2b5f' 
        },
        { 
            lat: 12.9716,
lng: 77.5946,
            name: 'Praveen Srivatsa', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/cb0e14b9-6bd1-ea11-a812-000d3a8ccaf5', 
            category: 'AI platform', 
            year: '2020', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/cb0e14b9-6bd1-ea11-a812-000d3a8ccaf5' 
        },
        { 
            lat: 18.5204,
lng: 73.8567,
            name: 'Kasam Sheik', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/bf7b6297-4a7f-ec11-8d21-0022482837b1', 
            category: 'AI platform', 
            year: '2022', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/bf7b6297-4a7f-ec11-8d21-0022482837b1' 
        },
        { 
            lat: 21.1458,
lng: 79.0882 ,
            name: 'Sakshi Kokardekar', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/bf565cdc-d34d-47e5-82ea-afb2f3a6108e?638489293611114423', 
            category: 'AI platform', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/bf565cdc-d34d-47e5-82ea-afb2f3a6108e' 
        },
        { 
            lat: 21.1458,
lng: 79.0882,
            name: 'Yogesh Kulkarni', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/bbc36999-c09f-4a23-bf52-65d9f01e5e41?638403887073941727', 
            category: 'AI platform', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/bbc36999-c09f-4a23-bf52-65d9f01e5e41' 
        },
        { 
            lat: 26.9124,
lng: 75.7873 ,
            name: 'Abhinav Sharma', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/66565730-cb54-4a5a-9352-5d16c58a91a6?638403898184047234', 
            category: 'AI Services', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/66565730-cb54-4a5a-9352-5d16c58a91a6' 
        },
        { 
            lat: 26.8467,
lng: 80.9462,
            name: 'Nishith Pathak', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/89f98fa8-3c9a-e411-93f2-9cb65495d3c4', 
            category: 'AI platform', 
            year: '2016', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/89f98fa8-3c9a-e411-93f2-9cb65495d3c4' 
        },
        { 
            lat: 25.3176,
            lng: 82.9739,
            name: 'Rohit Yadav', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/16e2e9b1-549f-4b00-94d7-74c05eac1f82?638476584015287176', 
            category: 'AI platform', 
            year: '2022', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/16e2e9b1-549f-4b00-94d7-74c05eac1f82' 
        },
        { 
            lat: 27.1767,
lng: 78.0081,
            name: 'Sarthak Jain', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4aae8975-4ce9-4810-b1cf-2cd0bde34e03?638532509493332702', 
            category: 'AI platform', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4aae8975-4ce9-4810-b1cf-2cd0bde34e03' 
        },
        { 
            lat: 13.0820,
lng: 80.2877,
            name: 'Saravanan Ganesan', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/9e21a054-127c-40be-9e61-cae54198d474?638532655304569459', 
            category: 'AI Services', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/9e21a054-127c-40be-9e61-cae54198d474' 
        },
        { 
            lat: 27.1767,
lng: 78.0081,
            name: 'Divakar Kumar', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/01f5e76b-d587-4e87-aee1-a3e52bda2c98?638501816592554800', 
            category: 'AI platform', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/01f5e76b-d587-4e87-aee1-a3e52bda2c98' 
        },
        { 
            lat: 9.9195,
lng: 78.1192,
            name: 'Vinoth Rajendran', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7a2c9b01-7042-ea11-a812-000d3a8ccaf5', 
            category: 'AI services', 
            year: '2020', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7a2c9b01-7042-ea11-a812-000d3a8ccaf5' 
        },

//         { 
// //             lat: 13.0499,
// lng: 80.2820,
//             name: '', 
//             picture: '', 
//             category: 'AI platform', 
//             year: '2024', 
//             linkedin: '' 
//         },
        { 
            lat: 13.0823,
            lng: 80.2757,
            name: 'Navaneethan Gopal', 
            picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/2c57421c-541a-42eb-bc21-0dd47c54986c?638501603564788731', 
            category: 'AI platform', 
            year: '2024', 
            linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/2c57421c-541a-42eb-bc21-0dd47c54986c' 
        },
       
        { 
                       lat: 34.0522,
lng: -118.2437,
                        name: 'Huan Li', 
                        picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/aafc915e-661b-e811-8106-3863bb2e0320', 
                        category: 'AI services', 
                        year: '2018', 
                        linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/aafc915e-661b-e811-8106-3863bb2e0320' 
                    },
                    { 
                        lat: 37.7749,
lng: -122.4194,
                                    name: 'Russell Foltz-Smith', 
                                    picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/767363c6-202e-46cc-bd0d-d5214dcfd468?638405065345148054', 
                                    category: 'AI Services', 
                                    year: '2024', 
                                    linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/767363c6-202e-46cc-bd0d-d5214dcfd468' 
                                },
                                { 
                                    lat: 32.7157,
lng: -117.1611,
                                                name: 'Timothy Huckaby', 
                                                picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c954d96c-3c9a-e411-93f2-9cb65495d3c4', 
                                                category: 'AI Machine learning and AI services', 
                                                year: '2005-2024', 
                                                linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c954d96c-3c9a-e411-93f2-9cb65495d3c4' 
                                            },


                                            { 
                                                lat: 39.0997,
                                                lng: -94.5786,
                        name: 'Liji Thomas', 
                        picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8989ea5d-4a95-ec11-b400-000d3a4fa6d3', 
                        category: 'AI Services and machine learning', 
                        year: '2022', 
                        linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8989ea5d-4a95-ec11-b400-000d3a4fa6d3' 
                    },
                    { 
                        lat: 39.0997,
                        lng: -94.5786,
name: 'Liji Thomas', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8989ea5d-4a95-ec11-b400-000d3a4fa6d3', 
category: 'AI Services and machine learning', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8989ea5d-4a95-ec11-b400-000d3a4fa6d3' 
},
{ 
    lat: 25.7617,
lng: -80.1918,
name: 'Zoiner Tejada', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/05ea68c6-3c9a-e411-93f2-9cb65495d3c4', 
category: 'machine learning studio', 
year: '2012 - 2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/05ea68c6-3c9a-e411-93f2-9cb65495d3c4' 
},

{ 
    lat: 28.5383,
lng: -81.3792,
name: 'Noelle Russell', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/6e3770a8-5c01-eb11-a815-000d3a8dfe0d', 
category: 'AI Services and machine learning studio', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6e3770a8-5c01-eb11-a815-000d3a8dfe0d' 
},
{ 
    lat: 42.2711,
lng: -89.0937,
name: 'Adam Wisniewski', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/9bd1f19f-9ecf-4056-ac3b-0c21a65a051c?638447391356349977', 
category: 'AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/9bd1f19f-9ecf-4056-ac3b-0c21a65a051c' 
},
{ 
    lat: 39.7817,
lng: -89.6501,
name: 'Haiping Chen', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/5efdda5f-1cb4-ed11-b596-000d3a1ad36b', 
category: ' machine learning studio', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/5efdda5f-1cb4-ed11-b596-000d3a1ad36b' 
},

{ 
    lat: 42.3601,
lng: -71.0589,
name: 'Veronika Kolesnikova', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4e1b105c-f467-e911-a987-000d3a1378f6', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4e1b105c-f467-e911-a987-000d3a1378f6' 
},

{ 
    lat: 42.3314,
lng: -83.0458,
name: 'Charles Elwood', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/641448c9-ccb0-ec11-983f-000d3a1017e3', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/641448c9-ccb0-ec11-983f-000d3a1017e3' 
},

{ 
    lat: 36.1699,
    lng: -115.1398,
name: 'Matthew Renze', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/5dd8630c-7933-e611-8129-c4346bac7bfc', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2016', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/5dd8630c-7933-e611-8129-c4346bac7bfc' 
},

{ 
    lat: 43.2081,
lng: -71.5376,
name: 'Andrew Lencsak', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7fcef307-7489-487a-87b1-00a7596af221?638339303307188230', 
category: 'Business Applications, AI Platform', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7fcef307-7489-487a-87b1-00a7596af221' 
},

{ 
    lat: 39.9612,
lng: -82.9988,
name: 'Matt Eland', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/b63b81a3-1cb4-ed11-b596-000d3a1ad36b', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/b63b81a3-1cb4-ed11-b596-000d3a1ad36b' 
},
{ 
    lat: 36.1627,
lng: -86.7816,
name: 'Timothy Warner', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e9a13bca-2798-4247-be56-f116f780869d?638449014679263984', 
category: 'Azure AI Services, Datacenter Management (Group Policy, System Center)', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e9a13bca-2798-4247-be56-f116f780869d' 
},


{ 
    lat: 37.5407,
lng: -77.4360,
name: 'Prashant G Bhoyar', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/450e3fcf-4d15-e711-810b-3863bb36edf8', 
category: 'Azure AI Services, Power Automate', 
year: '2016-2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/450e3fcf-4d15-e711-810b-3863bb36edf8' 
},


{ 
    lat: 43.0731,
lng: -89.4012,
name: 'Cameron Vetter', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/9cc2f5ec-6250-e911-a97f-000d3a137a43?638471492190985772', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/9cc2f5ec-6250-e911-a97f-000d3a137a43' 
},


{ 
    lat: 36.1627,
lng: -86.7816,
name: 'Greg Levenhagen', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a59c719d-25a7-41df-b1f9-78275f5f9b55', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2024', 
linkedin: 'hhttps://mvp.microsoft.com/en-US/MVP/profile/a59c719d-25a7-41df-b1f9-78275f5f9b55' 
},
      

{ 
    lat: 29.7604,
    lng: -95.3698,
name: 'Chander Dhall', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4dbc70c0-3c9a-e411-93f2-9cb65495d3c4', 
category: ' Azure AI Services', 
year: '2011', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4dbc70c0-3c9a-e411-93f2-9cb65495d3c4' 
},

{ 
    lat: 32.7767,
lng: -96.7970,
name: 'Farhana Sethi', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/b0dba342-6d61-461a-b297-08ce52adf1ce?638315218498334373', 
category: 'Azure Machine Learning Studio, Power BI', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/b0dba342-6d61-461a-b297-08ce52adf1ce' 
},

{ 
    lat: 30.2672,
lng: -97.7431,
name: 'Ron Dagdag', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/81f0bc54-c7fa-e611-8104-3863bb363e80', 
category: 'Azure Machine Learning Studio, Azure Edge Devices', 
year: '2017 -2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/81f0bc54-c7fa-e611-8104-3863bb363e80' 
},

{ 
    lat: 29.4241,
lng: -98.4936,
name: 'Shubham Saboo', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d60719a2-41eb-422d-b77e-bd6680eb634b?638443114098962560', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d60719a2-41eb-422d-b77e-bd6680eb634b' 
},

{ 
    lat: 51.5074,
lng: -0.1278,
name: 'Darshna Shah', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/cfda940c-654b-ec11-8f8e-00224827f7fc?638273484778191949', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/cfda940c-654b-ec11-8f8e-00224827f7fc' 
},
{ 
    lat: 53.4808,
lng: -2.2426,
name: 'Gavita Regunath', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8c535d61-c755-ed11-9561-000d3a197333', 
category: 'Azure Machine learning studio', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8c535d61-c755-ed11-9561-000d3a197333' 
},
{ 
    lat: 52.4862,
lng: -1.8904,
name: 'Sray Agarwal', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7c86e2b1-7eb7-ea11-a812-000d3a8dfe0d', 
category: 'Azure Machine learning studio', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7c86e2b1-7eb7-ea11-a812-000d3a8dfe0d' 
},
{ 
    lat: 53.4084,
lng: -2.9916,
name: 'Tori Tompkins', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/36bf2aa5-6728-4e46-aaff-607536cdcf70?638403906683151215', 
category: 'Azure Machine learning studio', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/36bf2aa5-6728-4e46-aaff-607536cdcf70' 
},
{ 
    lat: 53.7997,
lng: -1.5491,
name: 'Ian Cunningham', 
picture: 'https://mvp.microsoft.com/Assets/UserProfile/MVP/Icon-Profile.svg', 
category: 'Azure Machine learning studio', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6629c55e-94dd-4106-878f-e55cd6a9d484' 
},

{ 
    lat: 55.8642,
lng: -4.2518,
name: 'Anna Wykes', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/93085142-e0d7-eb11-bacb-000d3a154f10', 
category: 'Azure Machine learning studio', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/93085142-e0d7-eb11-bacb-000d3a154f10' 
},
{ 
    lat: 55.9533,
lng: -3.1883,
name: 'Chris Lloyd-Jones', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/224176f9-f3a7-eb11-b1ac-000d3a53daf4', 
category: 'Azure Machine learning studio', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/224176f9-f3a7-eb11-b1ac-000d3a53daf4' 
},
{ 
    lat: 51.4816,
lng: -3.1791,
name: 'Gosia Borzecka', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e6f4aeae-67c1-e811-816b-3863bb2e0320', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e6f4aeae-67c1-e811-816b-3863bb2e0320' 
},
{ 
    lat: 54.9784,
lng: -1.6174,
name: 'Jamie Maguire', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/53f1b864-76af-e911-a99a-000d3a137063', 
category: 'Azure Machine learning studio', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/53f1b864-76af-e911-a99a-000d3a137063' 
},
{ 
    lat: 51.4545,
lng: -2.5879,
name: 'Steve Miles', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/74271c60-7b0d-ed11-b83f-000d3a1036b3', 
category: 'Azure Patterns & Practices, Azure AI Services', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/74271c60-7b0d-ed11-b83f-000d3a1036b3' 
},

{ 
    lat: -6.9667,
lng: 110.4167,
name: 'Agus Suparno', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/2af58470-dd7e-e611-80f8-c4346badb51c', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/2af58470-dd7e-e611-80f8-c4346badb51c' 
},


{ 
    lat: -23.5505,
lng: -46.6333,
name: 'Ahirton Lopes', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f58c75df-fa6f-ea11-a811-000d3a8ccaf5', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f58c75df-fa6f-ea11-a811-000d3a8ccaf5' 
},
{ 
    lat: -23.9618,
lng: -46.3336,
    
name: 'Dani Monteiro', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/0b2b9617-0a3e-4078-a8cb-544db5a539a7?638449197123159539', 
category: ' Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/0b2b9617-0a3e-4078-a8cb-544db5a539a7' 
},

{ 
    lat: -23.2237,
lng: -45.9009,
name: 'Lucas Costa', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c1962b00-39a5-449c-8a07-e153ab361d60?638423422578440878', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c1962b00-39a5-449c-8a07-e153ab361d60' 
},

{ 
    lat: -22.9099,
    lng: -47.0626,
name: 'Felipe Chikuji', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c4bfbc4a-5058-4b32-b33d-bbdd625ab844?638404201558513110', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c4bfbc4a-5058-4b32-b33d-bbdd625ab844' 
},

{ 
    lat: -33.8688,
lng: 151.2093
,
name: 'Somy Ayazi', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e6cad8fd-0d07-ec11-b6e6-000d3a57952c', 
category: 'Azure AI Services and machine learning studio', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e6cad8fd-0d07-ec11-b6e6-000d3a57952c' 
},
{ 
    lat: -32.9283,
    lng: 151.7817,
name: 'Simon Waight', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/9f20d37e-22c9-4606-856b-c229017fb70e?638405231913192737', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/9f20d37e-22c9-4606-856b-c229017fb70e' 
},
{ 
    lat: -34.4244,
    lng: 150.8931,
name: 'Haritha Thilakarathne', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c9727e71-f35a-e711-8114-3863bb2ed1f8', 
category: 'Azure AI Services and machine learning studio', 
year: '2017-2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c9727e71-f35a-e711-8114-3863bb2ed1f8' 
},
{ 
    lat: -28.6474,
lng: 153.6010,
name: 'Arafat Tehsin', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7d3c555b-65c9-e911-a991-000d3a137a43', 
category: 'Azure AI Services and machine learning studio', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7d3c555b-65c9-e911-a991-000d3a137a43' 
},
{ 
    lat: 48.2082,
lng: 16.3738,
name: 'Stephan Bisser', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/bf3a7aab-5a32-e811-8112-3863bb353d80', 
category: 'Azure AI Services, M365 Development', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/bf3a7aab-5a32-e811-8112-3863bb353d80' 
},

{ lat: 42.1354,
    lng: 24.7453,
name: 'Ekaterina Ivanova', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f8968491-3959-ea11-a812-000d3a8cc689', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f8968491-3959-ea11-a812-000d3a8cc689' 
},
{ 
    lat: 42.6977,
lng: 23.3219,
name: 'Ivelin Andreev', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ee985d46-a004-e811-8104-3863bb2bca60', 
category: 'Technology Area, Azure Machine Learning Studio, Azure Integration PaaS', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ee985d46-a004-e811-8104-3863bb2bca60' 
},




{ 
    lat: 59.3293,
    lng: 18.0686,
name: 'Goran Vuksic', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a44d3a51-ef18-eb11-a813-000d3a8dfe0d', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a44d3a51-ef18-eb11-a813-000d3a8dfe0d' 
},
{ 
    lat: 57.7089,
lng: 11.9746,
name: 'Alan Smith', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8159d96c-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2005', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8159d96c-3c9a-e411-93f2-9cb65495d3c4' 
},
{ 
    lat: 55.6049,
lng: 13.0038,
name: 'Peter Örneholm', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e11f13d2-651b-e811-8106-3863bb2e0320', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e11f13d2-651b-e811-8106-3863bb2e0320' 
},
{ 
    lat: 59.8586,
lng: 17.6389,
name: 'Kim Berg', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/6adea2f0-2fa6-4bbd-adef-757918eb37e8?638554219022190249', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6adea2f0-2fa6-4bbd-adef-757918eb37e8' 
},

{ 
    lat: 54.3233,
lng: 10.1228,
name: 'Jörg Neumann', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/37996997-1121-421c-963a-68faca989262?638405911105780797', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/37996997-1121-421c-963a-68faca989262' 
},


{ 
    lat: 52.3906,
lng: 13.0645,
name: 'Yared Iesse Bustillo Medina', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/93bcf3eb-3a92-4e56-83e2-2b74f3799f31?638448899165277752', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/93bcf3eb-3a92-4e56-83e2-2b74f3799f31' 
},

{ 
    lat: 48.1351,
lng: 11.5820,
name: 'Alexander Wachtel', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/146f88ae-2d2e-eb11-a813-000d3a8dfe0d', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/146f88ae-2d2e-eb11-a813-000d3a8dfe0d' 
},



{ 
    lat: 36.7196,
lng: -4.4200,
name: 'Laura Da Silva', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7b61128a-aa90-e811-813c-3863bb2bca60', 
category: 'Azure Machine Learning Studio', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7b61128a-aa90-e811-813c-3863bb2bca60' 
},

{ 
    lat: 37.3891,
lng: -5.9845,
    
name: 'Manuel Rodrigo Cabello Malagon', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d9d75297-c2ba-e711-80fc-3863bb353d80', 
category: 'Azure Machine Learning Studio', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d9d75297-c2ba-e711-80fc-3863bb353d80' 
},


{ 
    lat: 43.2574,
lng: -2.9248,
    
name: 'Sara San Luís Rodríguez', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/034c1564-622c-4a47-af0c-4f048c8cce29?638403969150124706', 
category: 'Azure Machine Learning Studio, Responsible AI with Azure', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/034c1564-622c-4a47-af0c-4f048c8cce29' 
},

{ 
    lat: 43.2630,
    lng: -2.9350,
    
name: 'Christian Carballo Lozano', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4f5f5172-1366-4e14-8ab5-8fddae11968c?638532693183870901', 
category: 'Azure AI services and Machine Learning Studio', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4f5f5172-1366-4e14-8ab5-8fddae11968c' 
},

{ lat: 32.0853,
    lng: 34.7818,
    
    
name: 'Ami Diamond', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d32d6181-95fb-ed11-8f6d-000d3a560942', 
category: 'Microsoft Teams, SharePoint', 
year: '2023-2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d32d6181-95fb-ed11-8f6d-000d3a560942' 
},



{ 
    lat: 39.8628,
    lng: -4.0273,
    
name: 'Mario Arias', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ae664e95-8616-47c5-b025-8606f12f022c?638391787028663857', 
category: 'APower Apps, Azure Machine Learning Studio', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ae664e95-8616-47c5-b025-8606f12f022c' 
},

{ 
    lat: 42.8782,
lng: -8.5448,
    
name: 'ANTONIO SOTO RODRIGUEZ', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/2623a11e-9bbd-4bdc-8c88-9b131e9ae781?638448923189544449', 
category: 'AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/2623a11e-9bbd-4bdc-8c88-9b131e9ae781' 
},

{ 
    lat: 28.1235,
lng: -15.4363,
    
name: 'Alexander Gonzalez', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a24da7cf-7eb7-ea11-a812-000d3a8dfe0d', 
category: 'AI Machine learning studio', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a24da7cf-7eb7-ea11-a812-000d3a8dfe0d' 
},





{ 
    lat: 40.4169,
lng: -3.7035,
    
name: 'Celeste Sanchez Fresneda', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/58cff770-47a8-4680-af24-5756852398dd?638478593029496509', 
category: 'AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/58cff770-47a8-4680-af24-5756852398dd' 
},

{ 
    lat: 40.4154,
    lng: -3.7074,
    
name: 'Javier Menendez Pallo', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/3a23ec59-ed9f-ea11-a811-000d3a8ccaf5', 
category: 'AI services and Machine learning studio', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/3a23ec59-ed9f-ea11-a811-000d3a8ccaf5' 
},

{ 
    lat: 40.4153,
lng: -3.6840,
    
name: 'Maria Soto Castro', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/22faca7a-425b-4a1d-8c6e-c853b61d26c3?638412485618609653', 
category: 'AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/22faca7a-425b-4a1d-8c6e-c853b61d26c3' 
},

{ 
    lat: 40.4179,
lng: -3.7143,
    
name: 'Rodrigo Ezequiel Liberoff Vazquez', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ec81ff02-89c9-4ce4-bd02-e914959e089c?638475558386883310', 
category: 'AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ec81ff02-89c9-4ce4-bd02-e914959e089c' 
},

{ 
    lat: 40.4205,
lng: -3.7057,
    
name: 'Xavier Portilla Edo', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ea9a6ada-ec1d-47a9-8769-f8090f302a40?638532646942054744', 
category: 'AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ea9a6ada-ec1d-47a9-8769-f8090f302a40' 
},

{ 
    lat: 52.3676,
lng: 4.9041,
    
name: 'Alyona Una Galyeva', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/651e811d-f4a7-eb11-b1ac-000d3a53daf4', 
category: 'AI machine learning studio', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/651e811d-f4a7-eb11-b1ac-000d3a53daf4' 
},
{ 
    lat: 52.3874,
lng: 4.6462,
    
name: 'Dennis Vroegop', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d3f78fa8-3c9a-e411-93f2-9cb65495d3c4', 
category: 'AI machine learning studio', 
year: '2007', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d3f78fa8-3c9a-e411-93f2-9cb65495d3c4' 
},


{ 
    lat: 52.0907,
lng: 5.1214,
    
name: 'Willem Meints', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d21a7aaa-63ea-e511-8125-c4346bad1228', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2016', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d21a7aaa-63ea-e511-8125-c4346bad1228' 
},

{ lat: 52.0705,
    lng: 4.3007,
    
name: 'Sjoukje Zaal', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/5da00712-7c72-e711-8113-3863bb36dd08', 
category: 'Azure Machine Learning Studio, Cloud Native', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/5da00712-7c72-e711-8113-3863bb36dd08' 
},


{ lat: 45.0703,
    lng: 7.6869,
    
name: 'Clemente Giorio', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8b9207f9-3c9a-e411-93f2-9cb65495d3c4?638338644882060990', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2014', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8b9207f9-3c9a-e411-93f2-9cb65495d3c4' 
},



{ lat: 41.9028,
    lng: 12.4964,
    
name: 'Antimo Musone', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e5347cf6-651b-e811-8106-3863bb2e0320', 
category: 'Azure Machine Learning Studio', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e5347cf6-651b-e811-8106-3863bb2e0320' 
},

{ lat: 43.7696,
    lng: 11.2558,
    
name: 'Gianni Rosa Gallina', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f3bd70c0-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2012', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f3bd70c0-3c9a-e411-93f2-9cb65495d3c4' 
},

{ lat: 45.4408,
    lng: 12.3155,
    
name: 'Sebastiano Galazzo', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8f9107f9-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2014', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8f9107f9-3c9a-e411-93f2-9cb65495d3c4' 
},

{ lat: -36.8485,
    lng: 174.7633,
    
name: 'Anupama Natarajan', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f0d771ca-5a32-e811-8112-3863bb353d80?638283319027229758', 
category: 'Azure AI Services, Azure SQL (Database, Pools, Serverless, Hyperscale, Managed Instance, Virtual Machines', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f0d771ca-5a32-e811-8112-3863bb353d80' 
},




{ lat: 35.0116,
    lng: 135.7681,
    
name: '佳隆 瀬尾', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/215b80b4-3c9a-e411-93f2-9cb65495d3c4?638339827065897295', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2009', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/215b80b4-3c9a-e411-93f2-9cb65495d3c4' 
},

{ lat: 35.6895,
    lng: 139.6917,
    
name: 'Atsushi Yokohama', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/2c3e3c6b-f35a-e711-8114-3863bb2ed1f8', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/2c3e3c6b-f35a-e711-8114-3863bb2ed1f8' 
},

{ lat: 34.6937,
    lng: 135.5023,
    
name: 'Haruki Odajima', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/457f6590-bfd9-e811-8172-3863bb2e0320', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/457f6590-bfd9-e811-8172-3863bb2e0320' 
},

{ lat: 34.3853,
    lng: 132.4553,
    
name: 'Takashi Kawamoto', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/9db73784-e0d7-eb11-bacb-000d3a154f10', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/9db73784-e0d7-eb11-bacb-000d3a154f10' 
},

{ lat: 43.0618,
    lng: 141.3545,
    
name: 'Yusuke Satake', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/76435eb0-88b0-4b64-b4be-6bc4407d2cdc?638506655955404758', 
category: 'Azure AI Services, Azure SQL (Database, Pools, Serverless, Hyperscale, Managed Instance, Virtual Machines', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/76435eb0-88b0-4b64-b4be-6bc4407d2cdc' 
},



{ 
    lat: 39.8828,
    lng: 116.4066,
    
    
name: 'jiarui li', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7ee8330c-64ab-e811-814b-3863bb353d80', 
category: 'Azure AI Services', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7ee8330c-64ab-e811-814b-3863bb353d80' 
},
{ 
    lat: 39.9163,
    lng: 116.3972,  
name: 'BINGQIANG ZHAN', 
picture: 'https://mvp.microsoft.com/Assets/UserProfile/MVP/Icon-Profile.svg', 
category: 'Azure AI Services, Azure SQL (Database, Pools, Serverless, Hyperscale, Managed Instance, Virtual Machines', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/76435eb0-88b0-4b64-b4be-6bc4407d2cdc' 
},
{ lat: 39.9994,
    lng: 116.2755,
    
name: 'Lowin Li', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8746f87f-c755-ed11-9561-000d3a197333', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8746f87f-c755-ed11-9561-000d3a197333' 
},


{ lat: 23.1291,
    lng: 113.2644,
    
name: 'zhen guan', 
picture: 'https://mvp.microsoft.com/Assets/UserProfile/MVP/Icon-Profile.svg', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/74a32a3e-5f1d-4d25-839f-30e17bca7583' 
},

{ lat: 41.8057,
    lng: 123.4315,
    
name: 'Junjian Liu', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/06460f9b-f838-493b-bd16-30216fd32bc7?638534375805457618', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/06460f9b-f838-493b-bd16-30216fd32bc7' 
},


{ lat: 36.0671,
    lng: 120.3826,
    
name: 'Mingzhi Yi', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8f3e6042-2aaf-47f0-97c4-0de37cf0f81b?638403847033262307', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8f3e6042-2aaf-47f0-97c4-0de37cf0f81b' 
},


{ lat: 30.2741,
    lng: 120.1551,
    
name: 'Bin Xiang', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/2f5f1b90-aa90-e811-813c-3863bb2bca60', 
category: 'Azure AI Services', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/2f5f1b90-aa90-e811-813c-3863bb2bca60' 
},






{ lat: 31.2397,
    lng: 121.4882,
    
name: 'YuXiang Wang', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ea0ae4ed-409a-e411-b4b5-6c3be5a84f98?638302905553508056', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2006', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ea0ae4ed-409a-e411-b4b5-6c3be5a84f98' 
},


{ lat: 31.2422,
    lng: 121.4958,
    
name: 'Hao Hu', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/0209e4ed-409a-e411-b4b5-6c3be5a84f98', 
category: 'Azure Machine Learning Studio, Azure Compute Infrastructure', 
year: '2003', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/0209e4ed-409a-e411-b4b5-6c3be5a84f98' 
},


{ lat: 31.2270,
    lng: 121.4921,
    
name: 'Qinghua Duan', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4917486a-7042-ea11-a812-000d3a8cc830', 
category: 'Azure AI Services', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4917486a-7042-ea11-a812-000d3a8cc830' 
},


{ lat: 31.2341,
    lng: 121.4744,
    
name: 'Zihao Zhang', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a75f0aa4-37e8-ea11-a813-000d3a8ccaf5', 
category: 'Azure AI Services', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a75f0aa4-37e8-ea11-a813-000d3a8ccaf5' 
},


{ lat: 31.2323,
    lng: 121.4755,
    
name: '凯 范', 
picture: 'https://mvp.microsoft.com/Assets/UserProfile/MVP/Icon-Profile.svg', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/faed9b19-65cf-455c-a2db-1ffda41bf51b' 
},


{ lat: 45.8150,
    lng: 15.9819,
    
name: 'Bernardin Katic', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ed5780b4-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Azure AI Services', 
year: '2008', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ed5780b4-3c9a-e411-93f2-9cb65495d3c4' 
},


{lat: 4.7109,
    lng: -74.0721,
    
name: 'Carlos Alarcon', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a47d4356-28e0-4959-88a6-f71459220c79?638412304076330794', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a47d4356-28e0-4959-88a6-f71459220c79' 
},


{lat: 59.4370,
    lng: 24.7535,
    
name: 'Bobur Umurzokov', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/27453e8a-a64e-47dc-9908-0dfff5c859f2?638403866592748570', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/27453e8a-a64e-47dc-9908-0dfff5c859f2' 
},


{lat: -16.4990,
    lng: -68.1193,
    
name: 'Diana Calizaya Condori', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/6035a666-b263-4acc-b1a9-c840be5e11a2?638532915457049964', 
category: 'Responsible AI with Azure, Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6035a666-b263-4acc-b1a9-c840be5e11a2' 
},
{lat: -16.5548,
    lng: -68.0823,
    
name: 'Carla Vanesa Mamani Chavez', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/63b767ee-ccb0-ec11-983f-000d3a1017e3', 
category: 'Azure AI Services, Power Apps', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/63b767ee-ccb0-ec11-983f-000d3a1017e3' 
},


{lat: -1.2921,
    lng: 36.8219,
    
name: 'Sammy Deprez', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/36655fb2-fa6f-ea11-a811-000d3a8ccba0', 
category: 'Azure AI Services, Power Apps', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/36655fb2-fa6f-ea11-a811-000d3a8ccba0' 
},

{lat: 24.0734,
    lng: 120.5469,
    
name: '佳新 陳', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/b70fdf78-fa36-ec11-b6e6-00224825194e', 
category: 'Azure AI Services, Power Apps', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/b70fdf78-fa36-ec11-b6e6-00224825194e' 
},


{lat: 24.9937,
    lng: 121.2969,
    
name: 'Ryan Chung', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8903d17e-4a7f-ec11-8d21-0022482837b1', 
category: 'Azure AI Services, Power Apps', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8903d17e-4a7f-ec11-8d21-0022482837b1' 
},



{lat: 24.1477,
    lng: 120.6736,
    
name: 'Ko Ko', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/bd9200e3-7eb7-ea11-a812-000d3a8dfe0d', 
category: 'Azure AI Services, Power Apps', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/bd9200e3-7eb7-ea11-a812-000d3a8dfe0d' 
},


{lat: 25.0330,
    lng: 121.5654,
    
name: 'Summit Suen', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/452f30eb-c7fa-e611-8104-3863bb363e80?638441031176983152', 
category: 'Azure AI Services, Power Apps', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/452f30eb-c7fa-e611-8104-3863bb363e80' 
},


{lat: 25.0330,
    lng: 121.5654,
    
name: 'CHEIHNING Chen', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/956c914f-a042-e711-8112-3863bb2ed1f8', 
category: 'Azure AI Services', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/956c914f-a042-e711-8112-3863bb2ed1f8' 
},

{lat: 24.1477,
    lng: 120.6736,
    
name: 'Kui-Ming Chen', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e74dbe00-cdb0-ec11-983f-000d3a1017e3', 
category: 'Azure AI Services', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e74dbe00-cdb0-ec11-983f-000d3a1017e3' 
},

{lat: 24.9937,
    lng: 121.2969,
    
name: '文龍 蔡', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f35c80b4-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Azure AI Services, .NET', 
year: '2009', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f35c80b4-3c9a-e411-93f2-9cb65495d3c4' 
},

{lat: 22.6273,
    lng: 120.3014,
    
name: 'Ian Chen', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/95e968c6-3c9a-e411-93f2-9cb65495d3c4?638271446551287822', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2012', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/95e968c6-3c9a-e411-93f2-9cb65495d3c4' 
},


{lat: -2.9006,
    lng: -79.0045,
    
name: 'Daniel Gomez Jaramillo', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d3582b2e-76ef-eb11-94ef-000d3a121a8b', 
category: 'Azure AI Services, Web Development', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d3582b2e-76ef-eb11-94ef-000d3a121a8b' 
},


{lat: -0.1807,
    lng: -78.4678,
    
name: 'Cristopher Coronado', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/3a1e6f42-799d-44d1-b792-50550905b014?638183752460711219', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/3a1e6f42-799d-44d1-b792-50550905b014' 
},


{lat: 22.3193,
    lng: 114.1694,
    
name: 'Dicky Fung', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/28b45f55-d504-4832-9df9-3746b21e4878?638532578871134242', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/28b45f55-d504-4832-9df9-3746b21e4878' 
},


{lat: 30.4627,
    lng: 31.1843,
    
name: 'John Aziz', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/6efb1782-04bc-4ef8-ba04-aa4ccd0cd5d4?638307477979129015', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6efb1782-04bc-4ef8-ba04-aa4ccd0cd5d4' 
},

{lat: 21.0190,
    lng: -101.2574,
    
name: 'Luis Beltran', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a303266c-acc5-e611-80f9-3863bb34cb20', 
category: 'AI Platform, Developer Technologies', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a303266c-acc5-e611-80f9-3863bb34cb20' 
},

{lat: 21.1222,
    lng: -101.6860,
    
name: 'Oscar Santos', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/01b5a6aa-3c6e-41f5-b180-68fbf4b39217?638451997252321304', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/01b5a6aa-3c6e-41f5-b180-68fbf4b39217' 
},


{lat: 19.0414,
    lng: -98.2063,
    
name: 'Ricardo Josue Perez Altamirano', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/393ebdef-aab3-45d4-83d3-f59fb914b607?638331054627747525', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/393ebdef-aab3-45d4-83d3-f59fb914b607' 
},

{lat: 13.7460,
    lng: 100.5394,
    
name: 'Teerasej Jiraphatchandej', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/1b57773c-a042-e711-8112-3863bb2ed1f8', 
category: 'Azure AI Services', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/1b57773c-a042-e711-8112-3863bb2ed1f8' 
},

{lat: 18.7883,
    lng: 98.9853,
    
name: 'Komes Chandavimol', 
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7fbff10c-b97d-4955-b5dd-5e94dac92c4b?638453665672789416', 
category: 'Responsible AI with Azure', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7fbff10c-b97d-4955-b5dd-5e94dac92c4b' 
},


{lat: 50.8503,
    lng: 4.3517,
    
name: 'Luis Esteban Valencia',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/62cc6290-7833-e611-8129-c4346bac7bfc', 
category: 'Azure Machine Learning Studio', 
year: '2016', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/62cc6290-7833-e611-8129-c4346bac7bfc' 
},


{lat: 55.6761,
    lng: 12.5683,
    
name: 'Eva Pardi',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d1ebcf77-7042-ea11-a812-000d3a8ccba0', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d1ebcf77-7042-ea11-a812-000d3a8ccba0' 
},

{lat: 55.6794,
    lng: 12.5346,
    
name: 'Erik David Johnson',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/34f53b76-d753-4f68-8717-dacd1b15b399?638403900459024960', 
category: 'Azure AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/34f53b76-d753-4f68-8717-dacd1b15b399' 
},

{lat: 56.0308,
    lng: 12.59217,
    
name: 'Thomas Martinsen',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7d130c6b-f0f7-475a-9ce0-476bafe5ae2f', 
category: 'Azure AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7d130c6b-f0f7-475a-9ce0-476bafe5ae2f' 
},


{lat: 40.6401,
    lng: 22.9444,
    
name: 'Foteini Savvidou',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/628e99e7-ff3e-ed11-bba3-000d3a197333?638464816850309671', 
category: 'Azure AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/628e99e7-ff3e-ed11-bba3-000d3a197333' 
},





{lat: 37.5172,
    lng: 127.0473,
    
name: 'Mijeong Jeon',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/308b8358-67c1-e811-816b-3863bb2e0320', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/308b8358-67c1-e811-816b-3863bb2e0320' 
},

{lat: 37.5729,
    lng: 126.9794,
    
name: 'YoungWook Kim',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7fb4c978-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7fb4c978-3c9a-e411-93f2-9cb65495d3c4' 
},

{lat: 37.5326,
    lng: 126.9908,
    
name: 'Haesun Park',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c0e802e9-a17a-4bbb-84cb-039183b67f2f?638406719050238681', 
category: 'Azure AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c0e802e9-a17a-4bbb-84cb-039183b67f2f' 
},

{lat: 37.5610,
    lng: 126.9085,
    
name: 'Hoon Dong Kim',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/3c76e2f6-7733-e611-8129-c4346bac7bfc', 
category: 'Azure Machine learning studio', 
year: '2016', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/3c76e2f6-7733-e611-8129-c4346bac7bfc' 
},

{lat: 37.5744,
    lng: 127.0396,
    
name: '준태 박',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/3fed2559-513a-49d4-88b8-a3a901235036?638544370113585989', 
category: 'Azure AI services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/3fed2559-513a-49d4-88b8-a3a901235036' 
},


{lat: 36.3504,
    lng: 127.3845,
    
name: 'Jehyun Lee',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/6eda86ff-8786-ed11-aad1-000d3a197333', 
category: 'Azure machine learning studio', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6eda86ff-8786-ed11-aad1-000d3a197333' 
},


{lat: 50.4501,
    lng: 30.5234,
    
name: 'Oleksandr Krakovetskyi',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/dfba70c0-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Azure machine learning studio and AI services', 
year: '2011', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/dfba70c0-3c9a-e411-93f2-9cb65495d3c4' 
},


{lat: -12.0541,
    lng: -77.1181,
    
name: 'Nicolas Nakasone',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/fe5e258a-7833-e611-8129-c4346bac7bfc', 
category: 'Azure Machine Learning Studio, Power BI', 
year: '2016', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/fe5e258a-7833-e611-8129-c4346bac7bfc' 
},



{lat: -33.4313,
    lng: -70.6093,
    
name: 'Nestor Campos',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/215c1b0b-5d01-eb11-a815-000d3a8dfe0d', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/215c1b0b-5d01-eb11-a815-000d3a8dfe0d' 
},



{lat: -33.4088,
    lng: -70.5670,
    
name: 'Patricio Cofre',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d4ba18c3-dc7e-e611-80f8-c4346badb51c', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d4ba18c3-dc7e-e611-80f8-c4346badb51c' 
},

{lat: 52.4064,
    lng: 16.9252,
    
name: 'Maciej Rubczynski',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/60aca00a-f2ac-4f35-ac46-6fd4541e6288?638476400918669278', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/60aca00a-f2ac-4f35-ac46-6fd4541e6288' 
},

{lat: 51.1079,
    lng: 17.0385,
    
name: 'Marcin Mosiolek',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/5d37a2b0-31be-4eb8-bb6a-c92455813dd4?638403848602797460', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/5d37a2b0-31be-4eb8-bb6a-c92455813dd4' 
},


{lat: 50.0647,
    lng: 19.9450,
    
name: 'Marcin Szeliga',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/11f78fa8-3c9a-e411-93f2-9cb65495d3c4?638270689527317377', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2006', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/11f78fa8-3c9a-e411-93f2-9cb65495d3c4' 
},





{lat: 1.2494,
    lng: 103.8303,
    
name: 'Peter ChunYu Yau',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e651f38b-a927-4942-93ad-bb7449ebe40b?638404081864047211', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e651f38b-a927-4942-93ad-bb7449ebe40b' 
},


{lat: 1.3048,
    lng: 103.8318,
    
name: 'Magda Chelly',
picture: 'https://mvp.microsoft.com/Assets/UserProfile/MVP/Icon-Profile.svg', 
category: 'Cloud Security, Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6d7418ff-3621-454a-9aeb-1a07ae320775' 
},

{lat: 1.2834,
    lng: 103.8607,
    
name: 'PRIYANKA SHAH',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/0686aa19-ef18-eb11-a813-000d3a8dfe0d', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/0686aa19-ef18-eb11-a813-000d3a8dfe0d' 
},


{lat: 48.8566,
    lng: 2.3522,
    
name: 'Jean-Philippe Encausse',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/215d1a7f-7b72-e711-8113-3863bb36dd08', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/215d1a7f-7b72-e711-8113-3863bb36dd08' 
},

{lat: 48.8014,
    lng: 2.1301,
    
name: 'Nicolas ROBERT',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e022213c-a039-e911-a981-000d3a137208', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e022213c-a039-e911-a981-000d3a137208' 
},



{lat: 45.7578,
    lng: 4.8320,
    
name: 'Kevin Vimard',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/3c15d4ca-5e1a-41ca-9a42-015e22708b82?638533053063318901', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/3c15d4ca-5e1a-41ca-9a42-015e22708b82' 
},

{lat: 43.2965,
    lng: 5.3698,
    
name: 'Paul Peton',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/0b056fa8-aa90-e811-813c-3863bb2bca60', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/0b056fa8-aa90-e811-813c-3863bb2bca60' 
},

{lat: -31.4201,
    lng: -64.1888,
    
name: 'Ivana Tilca',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7266da1e-7042-ea11-a812-000d3a8ccba0', 
category: 'Azure AI Services, Azure Compute Infrastructure', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7266da1e-7042-ea11-a812-000d3a8ccba0' 
},


{lat: -31.6333,
    lng: -60.7000,
    
name: 'Pablo Piovano',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/33e06bb6-ccb0-ec11-983f-000d3a1017e3', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/33e06bb6-ccb0-ec11-983f-000d3a1017e3' 
},

{lat: 3.0733,
    lng: 101.5185,
    
name: 'Hong Teck Ong',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/2cbd19a3-b1a1-4b31-8096-9d46ff1825da?638538620219621900', 
category: 'Azure AI Services, Azure Infrastructure as Code', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/2cbd19a3-b1a1-4b31-8096-9d46ff1825da' 
},

{lat: 59.9139,
    lng: 10.7522,
    
name: 'Håkan Silfvernagel',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/94f09339-7042-ea11-a812-000d3a8cc689', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/94f09339-7042-ea11-a812-000d3a8cc689' 
},

{lat: 14.5995,
    lng: 120.9842,
    
name: 'Ziggy Zulueta',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e16e92c0-a380-4358-b029-25fd670fa224?638545365297829121', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e16e92c0-a380-4358-b029-25fd670fa224' 
},

{lat: 47.1585,
    lng: 27.6014,
    
name: 'Vlad Iliescu',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a25086ae-aa90-e811-813c-3863bb2bca60', 
category: 'Azure AI Services and machine learning studio', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a25086ae-aa90-e811-813c-3863bb2bca60' 
},


{lat: 49.2827,
    lng: -123.1207,
    
name: 'Stephen Ibaraki',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4b88d172-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2006', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4b88d172-3c9a-e411-93f2-9cb65495d3c4' 
},

{lat: 48.1482,
    lng: 17.1067,
    
name: 'Peter Hanzlík',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ec58ccc2-bcd0-4278-8dcc-130ebb2b261b?638501812903157361', 
category: 'Azure AI Services', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ec58ccc2-bcd0-4278-8dcc-130ebb2b261b' 
},

{lat: 46.8139,
    lng: -71.2082,
    
name: 'Rahat Yasir',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e4e135e1-55cc-e411-bbbe-6c3be5a8e164', 
category: 'Azure Machine Learning Studio', 
year: '2015', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e4e135e1-55cc-e411-bbbe-6c3be5a8e164' 
},


{lat: 41.1496,
    lng: -8.6109,
    
name: 'Amira Bedhiafi',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/56074169-273e-4ef3-9bd4-103228816896?638536040407623943', 
category: 'Data Integration', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/56074169-273e-4ef3-9bd4-103228816896' 
},


{lat: 41.1579,
    lng: -8.6291,
    
name: 'Pedro Sousa',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/04a33b27-661b-e811-8106-3863bb2e0320', 
category: 'Cloud Native, Azure Management', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/04a33b27-661b-e811-8106-3863bb2e0320' 
},


{lat: 51.4793,
    lng: 5.6570,
    
name: 'Sander van de Velde',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/45fb7324-abc5-e611-80f9-3863bb34cb20', 
category: 'Azure IoT Services & Development, Azure Edge Devices', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/45fb7324-abc5-e611-80f9-3863bb34cb20' 
},


{lat: 43.65107,
    lng: -79.347015,
    
name: 'Ehsan Eskandari',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/0abad6dc-5a32-e811-8112-3863bb353d80', 
category: 'Cloud Native, Azure Infrastructure as Code', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/0abad6dc-5a32-e811-8112-3863bb353d80' 
},

{lat: 52.5206,
    lng: 4.7885,
    
name: 'Peter Ruiter',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e73916b4-cdbc-49cc-9cf7-904941224997?638501442795273426', 
category: 'Power Apps, Customer Service', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e73916b4-cdbc-49cc-9cf7-904941224997' 
},

{lat: 3.8480,
    lng: 11.5021,
    
name: 'Jaures Beinjamin FOTSING',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/64ac1b7b-3e8a-4dd8-9ef6-aded886ac34a?638483617374167420', 
category: 'Web Development', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/64ac1b7b-3e8a-4dd8-9ef6-aded886ac34a' 
},

{lat: 47.3769,
    lng: 8.5417,
    
name: 'Kay Sauter',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/9e29f6c8-c755-ed11-9561-000d3a197333', 
category: 'Power BI, Azure SQL (Database, Pools, Serverless, Hyperscale, Managed Instance, Virtual Machines)', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/9e29f6c8-c755-ed11-9561-000d3a197333' 
},


{lat: 52.0417,
    lng: -0.7558,
    
name: 'Pieter Veenstra',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f807fb7a-27a3-e711-80f4-3863bb353d80', 
category: 'Power Automate, Power Apps', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f807fb7a-27a3-e711-80f4-3863bb353d80' 
},


{lat: 11.6643,
    lng: 78.1460,
    
name: 'Abdul Rasheed Feroz Khan',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e2cecf2c-dd7e-e611-80f8-c4346badb51c', 
category: 'Azure Hybrid & Migration, Azure Compute Infrastructure', 
year: '2017', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e2cecf2c-dd7e-e611-80f8-c4346badb51c' 
},


{lat: 35.5175,
    lng: -86.5804,
    
name: 'Ahmed Salih',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8d4347e0-f116-ee11-8f6e-000d3a1ad36b', 
category: 'Power Automate, Power Apps', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8d4347e0-f116-ee11-8f6e-000d3a1ad36b' 
},

{lat: 52.3555,
    lng: -1.1743,
    
name: 'Matt Collins-Jones',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/1e86aa19-ef18-eb11-a813-000d3a8dfe0d', 
category: 'Customer Experience, Customer Service', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/1e86aa19-ef18-eb11-a813-000d3a8dfe0d' 
},


{lat: 6.5244,
    lng: 3.3792,
    
name: 'Emmanuel O. Itoje',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f660ddaf-cf41-4c2f-bc53-cc38cd1a1fb1?638533827665514972', 
category: 'Microsoft 365', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f660ddaf-cf41-4c2f-bc53-cc38cd1a1fb1' 
},


{lat: 47.3744,
    lng: 8.5410,
    
name: 'Pascal Brunner',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/cadad299-396f-ed11-81ab-000d3a5600fa', 
category: 'Microsoft Viva, Microsoft Teams', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/cadad299-396f-ed11-81ab-000d3a5600fa' 
},


{lat: 52.6369,
    lng: -1.1398,
    
name: 'Parvez Ghumra',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/54eb4c0d-90f5-4b70-b812-a8b0fe7aebd3?638533856345614993', 
category: 'Power Apps, Customer Experience', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/54eb4c0d-90f5-4b70-b812-a8b0fe7aebd3' 
},

{lat: 50.7488,
    lng: -2.3445,
    
name: 'Charlie Phipps',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/56d15900-003f-ed11-bba3-000d3a197333?638330493354686616', 
category: 'power Pages, Power Apps', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/56d15900-003f-ed11-bba3-000d3a197333' 
},

{lat: 55.6818,
    lng: 12.5538,
    
name: 'Michael Morten Sonne',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/b6a5bd91-5ebd-4c84-8965-023a95273093?638447901891595748', 
category: 'Cloud Security, Identity & Access', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/b6a5bd91-5ebd-4c84-8965-023a95273093' 
},


{lat: 21.8853,
    lng: -102.2916,
    
name: 'Octavio Rdz de Santiago',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a19007f9-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Microsoft Intune', 
year: '2014', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a19007f9-3c9a-e411-93f2-9cb65495d3c4' 
},


{lat: 51.2538,
    lng: -85.3232,
    
name: 'Thiago Beier',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f7316f6b-bd60-4f5c-a92f-70627e02aaa9?638501681998575687', 
category: 'Microsoft Intune', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f7316f6b-bd60-4f5c-a92f-70627e02aaa9' 
},

{lat: 53.483959,
    lng: -2.244644,
    
name: 'Lee Englestone',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c0646853-38e8-ea11-a813-000d3a8ccaf5?638439248465324429', 
category: 'MR Development, .NET', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c0646853-38e8-ea11-a813-000d3a8ccaf5' 
},

{lat: 36.7213,
    lng: -4.4214,
    
name: 'András Fördős',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/574c366b-e5f4-422a-87be-8d8a791c4f36?638513596438736442', 
category: 'Power Apps, Customer Experience', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/574c366b-e5f4-422a-87be-8d8a791c4f36' 
},

{lat: 16.8409,
    lng: 96.1735,
    
name: 'Zar Ni Tyn',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/5f993182-65c9-e911-a9a2-000d3a1362e3?638452201663100241', 
category: 'Microsoft 365', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/5f993182-65c9-e911-a9a2-000d3a1362e3' 
},


{lat: 59.9139,
    lng: 10.7522,
    
name: 'Knut Relbe-Moe',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7d9407f9-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Microsoft Teams, Microsoft Viva', 
year: '2014', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7d9407f9-3c9a-e411-93f2-9cb65495d3c4' 
},

{lat: 35.1495,
    lng: -90.0490,
    
name: 'Douglas Starnes',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/6820a3f7-1f89-ea11-a812-000d3a8dfe0d', 
category: 'Python, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6820a3f7-1f89-ea11-a812-000d3a8dfe0d' 
},


{lat: 47.6062,
    lng: -122.3321,
    
name: 'Treb Gatte',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ac650ff3-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Power BI, Azure AI Services', 
year: '2013', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ac650ff3-3c9a-e411-93f2-9cb65495d3c4' 
},

{lat: 50.6521,
    lng: 9.5800,
    
name: 'Mabrouk Mahdhi',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f35dd202-f4e7-486d-9373-fc09329bbddb?638448888979336607', 
category: '.NET', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f35dd202-f4e7-486d-9373-fc09329bbddb' 
},

{lat: 36.4346,
    lng: 28.2176,
    
name: 'Maria-Anastasia Moustaka',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/2198180c-df3f-44e4-bb6d-7321e6162227?637397641975124941', 
category: 'Azure IoT Services & Development', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/1f1e3df9-4b4c-ec11-8f8e-00224827f7fc' 
},

{lat: 24.4539,
    lng: 54.3773,
    
name: 'Mahmoud A. ATALLAH',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/0919e04b-4a95-ec11-b400-000d3a4fa6d3', 
category: 'Azure Virtual Desktop, Azure Compute Infrastructure', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/0919e04b-4a95-ec11-b400-000d3a4fa6d3' 
},

{lat: 48.8606,
    lng: 2.3376,
    
name: 'Allan De Castro',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/03405b54-e0d7-eb11-bacb-000d3a154f10', 
category: 'Power Automate, Power Apps', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/03405b54-e0d7-eb11-bacb-000d3a154f10' 
},

{lat: 52.0797,
    lng: 4.3136,
    
name: 'Somesh Pathak',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/eff86aaf-ff3e-ed11-bba3-000d3a197333', 
category: 'Microsoft Intune', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/eff86aaf-ff3e-ed11-bba3-000d3a1973330' 
},

{lat: 55.8067,
    lng: 12.4387,
    
name: 'Mattias Melkersen',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8ce58342-f4bd-eb11-bacc-0022481f2c24', 
category: 'Microsoft Intune, Azure Virtual Desktop', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8ce58342-f4bd-eb11-bacc-0022481f2c24' 
},


{lat: 52.8067,
    lng: -2.1166,
    
name: 'Charles Sexton',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f7269f87-669e-4b97-bf3a-d7055f83018a?638533551148258438', 
category: 'Power Apps', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f7269f87-669e-4b97-bf3a-d7055f83018a' 
},

{lat: 46.3333,
    lng: 6.0667,
    
name: 'Jean-Loup Orgitello',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/29585019-b63d-4890-b5a7-7e1a9698c0fa?638449184030845451', 
category: 'Azure Virtual Desktop', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/29585019-b63d-4890-b5a7-7e1a9698c0fa' 
},

{lat: 41.8847,
    lng: 23.4583,
    
name: 'Katerina Chernevskaya',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a92fcf3d-b684-47a7-9ea8-6a864fa6d256?638403890276748512', 
category: 'Power Apps, Power Automate', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a92fcf3d-b684-47a7-9ea8-6a864fa6d256' 
},

{lat: 53.8008,
    lng: -1.5491,
    
name: 'Simon Doy',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/27fa9567-c755-ed11-9561-000d3a197333', 
category: 'Microsoft Viva, Microsoft 365', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/27fa9567-c755-ed11-9561-000d3a197333' 
},


{lat: 52.3759,
    lng: 4.8975,
    
name: 'André Arnaud de Calavon',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/b4650ff3-3c9a-e411-93f2-9cb65495d3c4', 
category: 'AI ERP', 
year: '2014', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/b4650ff3-3c9a-e411-93f2-9cb65495d3c4' 
},

{lat: 41.9973,
    lng: 21.4280,
    
name: 'Laze Janev',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/5663c435-4e8a-4c28-8d49-7e76a6cfc4c4?638475585117100090', 
category: 'AI ERP', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/5663c435-4e8a-4c28-8d49-7e76a6cfc4c4' 
},

{lat: 53.5511,
    lng: 9.9937,
    
name: 'Pauline Kolde',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/6ccc9e35-afef-49f1-88a1-e95e1e64806f?638532472001811426', 
category: 'Customer Experience', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6ccc9e35-afef-49f1-88a1-e95e1e64806f' 
},


{lat: 51.5286,
    lng: -0.1017,
    
name: 'Angeliki Patsiavou',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4a76426f-95fb-ed11-8f6d-000d3a560942?638462421920877437', 
category: 'Customer Experience', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4a76426f-95fb-ed11-8f6d-000d3a560942' 
},

{lat: 43.4623,
    lng: -3.8099,
    
name: 'Mario Trueba Cantero',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8894087e-2d2e-eb11-a813-000d3a8dfe0d', 
category: 'AI ERP, Power Apps', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8894087e-2d2e-eb11-a813-000d3a8dfe0d' 
},

{lat: 45.5057,
    lng: 4.9264,
    
name: 'Jerome Bezet-Torres',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/17d94ef0-7eb7-ea11-a812-000d3a8dfe0d?638280692486795206', 
category: 'PowerShell', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/17d94ef0-7eb7-ea11-a812-000d3a8dfe0d' 
},

{lat: 46.7595,
    lng: 7.6301,
    
name: 'Lionel Gurret',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/bb4c6781-bc18-447c-8fd4-23653f9b432e?638484154745894069', 
category: 'Azure Compute Infrastructure, DevOps', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/bb4c6781-bc18-447c-8fd4-23653f9b432e' 
},

{lat: 51.5044,
    lng: -0.1314,
    
name: 'Andy Jones',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ca18859c-ff3e-ed11-bba3-000d3a197333', 
category: 'Microsoft Intune', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ca18859c-ff3e-ed11-bba3-000d3a197333' 
},


{lat: 43.8561,
    lng: -79.3370,
    
name: 'Ashraf Ghonaim',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/b6721f67-1479-e811-8130-3863bb353d80', 
category: 'Power BI, Azure SQL (Database, Pools, Serverless, Hyperscale, Managed Instance, Virtual Machines)', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/b6721f67-1479-e811-8130-3863bb353d80' 
},

{lat: 62.1067,
    lng: 7.339,
    
name: 'Simon Skotheimsvik',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f279b4af-12fb-4235-b2c7-c70ed8ca2602?638448810376245714', 
category: 'Microsoft Intune', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f279b4af-12fb-4235-b2c7-c70ed8ca2602' 
},


{lat: 51.6336,
    lng: -0.777,
    
name: 'Rory Neary',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ae4ef5c8-2510-ea11-a811-000d3a8cc830', 
category: 'Power Automate, Power Apps', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ae4ef5c8-2510-ea11-a811-000d3a8cc830' 
},


{lat: 51.3704,
    lng: 6.1722,
    
name: 'Joey Verlinden',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/e69756e1-1d9e-ed11-83ff-000d3a5600fa', 
category: 'Identity & Access, Cloud Security', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/e69756e1-1d9e-ed11-83ff-000d3a5600fa' 
},

{lat: 51.5010,
    lng: -2.5951,
    
name: 'Lewis Barry',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/5ca5f3b7-dc70-4044-949e-59c66abb03d9?638448820480276725', 
category: 'Microsoft Intune', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/5ca5f3b7-dc70-4044-949e-59c66abb03d9' 
},


{lat: 4.6420,
    lng: -74.1277
    ,
    
name: 'Mayra Badillo Villamizar',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7999d06c-ed9f-ea11-a811-000d3a8ccaf5', 
category: 'Power Automate, Power Apps', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7999d06c-ed9f-ea11-a811-000d3a8ccaf5' 
},

{lat: 50.8503,
    lng: 4.3517,
    
name: 'JOERY VAN DEN BOSCH',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/6ade5d7d-95b0-4387-b345-e2653f43c328?638532615752064587', 
category: 'Microsoft Intune', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/6ade5d7d-95b0-4387-b345-e2653f43c328' 
},


{lat: 32.3333,
    lng: -6.3498,
    
name: 'Yassine Driouich',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/ea8fc6e5-f348-eb11-a813-000d3a8dfe0d', 
category: '.NET', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/ea8fc6e5-f348-eb11-a813-000d3a8dfe0d' 
},


{lat: 52.4575,
    lng: 6.0935,
    
name: 'Leo Visser',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/d36d1ac9-440a-4841-97a3-fb0ce0485e02?638403893264698523', 
category: 'Azure Networking Infrastructure & Security', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/d36d1ac9-440a-4841-97a3-fb0ce0485e02' 
},


{lat: 51.0543,
    lng: 3.7174,
    
name: 'Dieter Kempeneers',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/29ea1689-372a-40c1-b9c3-691fca463e79?638555036761440244', 
category: 'Windows 365', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/29ea1689-372a-40c1-b9c3-691fca463e79' 
},


{lat: 53.0234,
    lng: -1.4858,
    
name: 'Jason Wynn',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/bc24aaa3-c2ba-e711-80fc-3863bb353d80?638321129859574464', 
category: 'Microsoft Teams, Microsoft 365', 
year: '2018', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/bc24aaa3-c2ba-e711-80fc-3863bb353d80' 
},


{lat: 53.3498,
    lng: -6.2603,
    
name: 'Alan Kinane',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/aa8ec48e-4a95-ec11-b400-000d3a4fa6d3?638295035113366104', 
category: 'Azure Networking Infrastructure & Security, Azure Compute Infrastructure', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/aa8ec48e-4a95-ec11-b400-000d3a4fa6d3' 
},


{lat: 49.4875,
    lng: 8.4660,
    
name: 'Jannik Reinhard',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a235cc0c-1e9e-ed11-83ff-000d3a5600fa', 
category: 'Microsoft Intune', 
year: '2024', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a235cc0c-1e9e-ed11-83ff-000d3a5600fa' 
},


{lat: 52.7241,
    lng: 5.0530,
    
name: 'Robert Schouten',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c79f44e4-bfd9-e811-8172-3863bb2e0320', 
category: 'Microsoft Teams, Microsoft 365', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c79f44e4-bfd9-e811-8172-3863bb2e0320' 
},

{lat: 23.6102,
    lng: 85.2799,
    
name: 'Jitesh Kumar',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c351a633-4a95-ec11-b400-000d3a4fa6d3', 
category: 'Microsoft Intune, Windows 365', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c351a633-4a95-ec11-b400-000d3a4fa6d3' 
},

{lat: 17.123184,
    lng: 79.208824,
    
name: 'Amit Chandak',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f8dbc2ed-ff3e-ed11-bba3-000d3a197333', 
category: 'Power BI, Microsoft Fabric', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f8dbc2ed-ff3e-ed11-bba3-000d3a197333' 
},

{lat: 18.1124,
    lng: 79.0193,
    
name: 'Ritika Agarwal',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/a3fe6b35-38e8-ea11-a814-000d3a8dfe0d', 
category: 'Power Pages, Power Apps', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/a3fe6b35-38e8-ea11-a814-000d3a8dfe0d' 
},


{lat: 17.9784,
    lng: 79.5941,
    
name: 'Venkata polisetty',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/8e5a912d-4a95-ec11-b400-000d3a4fa6d3', 
category: 'Power Apps', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/8e5a912d-4a95-ec11-b400-000d3a4fa6d3' 
},


{lat: 13.7563,
    lng: 100.5018,
    
name: 'Surasuk Oakkharaamonphong',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4d8c78ba-3c9a-e411-93f2-9cb65495d3c4?638398920613618784', 
category: 'NET, Azure AI Services', 
year: '2011', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4d8c78ba-3c9a-e411-93f2-9cb65495d3c4' 
},


{lat: 55.6934,
    lng: 12.5525,
    
name: 'Emilie Lundblad',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/4877819f-95fb-ed11-8f6d-000d3a560942?638270791844514532', 
category: 'Azure Machine Learning Studio, Azure AI Services', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/4877819f-95fb-ed11-8f6d-000d3a560942' 
},

{lat: 29.0588,
    lng: 76.0856,
    
name: 'Mahender Pal',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/2b8e78ba-3c9a-e411-93f2-9cb65495d3c4', 
category: 'Customer Experience', 
year: '2013', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/2b8e78ba-3c9a-e411-93f2-9cb65495d3c4' 
},

{lat: 29.0588,
    lng: 76.0856,
    
name: 'Priyesh Wagh',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/36216997-37e8-ea11-a813-000d3a8ccaf5', 
category: 'AI ERP, Power Apps', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/36216997-37e8-ea11-a813-000d3a8ccaf5' 
},

{lat: 20.2724,
    lng: 85.8338,
    
name: 'Sanjaya Pradhan',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/1ff32085-fa36-ec11-b6e6-00224825194e', 
category: 'Power Apps, Power Automate', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/1ff32085-fa36-ec11-b6e6-00224825194e' 
},

{lat: 17.3850,
    lng: 78.4867,
    
name: 'Yash Agarwal',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7c62befc-6f42-ea11-a812-000d3a8ccba0', 
category: 'Power Automate, Power Apps', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7c62befc-6f42-ea11-a812-000d3a8ccba0' 
},

{lat: 18.5293,
    lng: 73.8450,
    
name: 'Smita Nachan',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/aeb306a4-6c60-eb11-a812-000d3a8ccaf5?638545611791764462', 
category: 'Microsoft 365, Azure AI Services', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/aeb306a4-6c60-eb11-a812-000d3a8ccaf5' 
},

{lat: 18.5917,
    lng: 73.7388,
    
name: 'Nanddeep Nachan',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/74f0ada3-3959-ea11-a812-000d3a8cc830?638310737246467329', 
category: 'Microsoft 365, Azure AI Services', 
year: '2019', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/74f0ada3-3959-ea11-a812-000d3a8cc830' 
},

{lat: 23.0225,
    lng: 72.5714,
    
name: 'Dhruvin Shah',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/88a86ca2-0d07-ec11-b6e6-000d3a57952c', 
category: 'Power Automate, Power Apps', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/88a86ca2-0d07-ec11-b6e6-000d3a57952c' 
},

{lat: 19.0760,
    lng: 72.8777,
    
name: 'Shrushti Shah',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c81104b4-8786-ed11-aad1-000d3a197333', 
category: 'Power Apps, Microsoft 365', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c81104b4-8786-ed11-aad1-000d3a197333' 
},

{lat: 28.5355,
    lng: 77.3910,
    
name: 'Nitin Sharma',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/926f6a12-7933-e611-8129-c4346bac7bfc', 
category: 'AI Platform, Developer Technologies', 
year: '2015', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/926f6a12-7933-e611-8129-c4346bac7bfc' 
},

{lat: 11.0168,
    lng: 76.9558,
    
name: 'Ram Prakash Duraisamy',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/c53e685f-396f-ed11-81ab-000d3a5600fa', 
category: 'Power Apps', 
year: '2022', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/c53e685f-396f-ed11-81ab-000d3a5600fa' 
},

{lat: 19.0758,
    lng: 72.8777,
    
name: 'Clavin Fernandes',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/fcbc6506-654b-ec11-8f8e-00224827f7fc', 
category: 'Power Automate, Power Apps', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/fcbc6506-654b-ec11-8f8e-00224827f7fc' 
},

{lat: 13.7367,
    lng: 100.5232,
    
name: 'Thant Zin Phyo',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/17568c77-4d4c-ec11-8f8e-00224827f7fc?638562621508336058', 
category: 'Azure Network Connectivity', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/17568c77-4d4c-ec11-8f8e-00224827f7fc' 
},


{lat: 38.5816,
    lng: -121.4944,
    
name: 'Jorge Levy',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/1e4791b6-fa36-ec11-b6e6-00224825194e', 
category: '.NET', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/1e4791b6-fa36-ec11-b6e6-00224825194e' 
},

{lat: 18.5167,
    lng: 73.8567,
    
name: 'Siddharth Vaghasia',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/f6facde4-5c01-eb11-a815-000d3a8dfe0d', 
category: 'M365 Development, Power Apps', 
year: '2020', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/f6facde4-5c01-eb11-a815-000d3a8dfe0d' 
},




{lat: 37.1020,
    lng: -8.6742,
    
name: 'Paul Keijzers',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/9279f41f-f35a-e711-8114-3863bb2ed1f8', 
category: 'Microsoft 365, Microsoft Teams', 
year: '2016', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/9279f41f-f35a-e711-8114-3863bb2ed1f8' 
},


{lat: 42.3736,
    lng: -71.1097,
    
name: 'Dustin Willard',
picture: 'https://mavenstorageprod.blob.core.windows.net/profile-pictures/7caccbae-f116-ee11-8f6e-000d3a1ad36b', 
category: 'Microsoft advanced content management and experiences', 
year: '2021', 
linkedin: 'https://mvp.microsoft.com/en-US/MVP/profile/7caccbae-f116-ee11-8f6e-000d3a1ad36b' 
},

















       
    ];
    
    // Add more MVPs as needed


// Function to create markers with popups for each MVP
function createMarkers() {
    mvps.forEach(mvp => {
        const icon = L.divIcon({
            html: `<img src="${mvp.picture}" class="mvp-icon" alt="${mvp.name}">`,
            className: '', // Remove default class to prevent styling issues
            iconSize: [40, 40],
            iconAnchor: [20, 20], // Center the icon
        });

        // Create marker with popup containing MVP information and link
        var marker = L.marker([mvp.lat, mvp.lng], { icon: icon }).addTo(map);
        marker.bindPopup(`
            <b>${mvp.name}</b><br>
            Category: ${mvp.category}<br>
            MVP Year: ${mvp.year}<br>
            <a href="${mvp.linkedin}" target="_blank">LinkedIn Profile</a>
        `);
    });
    var locateControl = L.control({ position: 'topright' });

locateControl.onAdd = function(map) {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

    container.innerHTML = '<a href="#" title="Zoom to Your Location"><i class="fas fa-map-pin"></i></a>';



    container.onclick = function() {
        // Attempt to locate user's position
        map.locate({ setView: true, maxZoom: 6 });

        // When the user's location is found, zoom to it
        map.on('locationfound', function(e) {
            var userLatLng = e.latlng;
            map.setView(userLatLng, 15);
        });

        // Handle errors if location detection fails
        map.on('locationerror', function(e) {
            alert("Location access denied or not available.");
        });
    };

    return container;
};

locateControl.addTo(map);
}

// Call the createMarkers function when the document is ready or immediately
createMarkers();
