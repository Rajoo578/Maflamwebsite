const fs = require('fs');

// Define the JSON structure and data
const jsonData = {
  "message": "details fetch successfully",
  "getPricingCourse1DetailsSec1": {
    "title": "نبذة عن الدورة.",
    "description": "دورة وصف"
  },
  "getPricingCourse1DetailsSec4": {
    "title": "Or Choose From Our Various Courses."
  },
  "formattedCourseData": {
    "id": "course_id",
    "courseId": "course_id",
    "title": "course_title",
    "description": "course_description",
    "price": "price_details",
    "lecturecount": "number_of_lessons",
    "promoPhoto": "promo_image_url",
    "promoVideo": "promo_video_url",
    "banner": "banner_image_url",
    "lessions": [
      {
        "SectionTitle1": "section_title",
        "Lessons": [
          {
            "lesson_name": "lesson_name",
            "timing": "lesson_duration"
          },
          {
            "lesson_name": "lesson_name",
            "timing": "lesson_duration"
          }
        ]
      }
    ],
    "promoVedio": "promo_video_url",
    "estimatedLearningTime": "learning_time_duration",
    "instructors": [
      {
        "name": "instructor_name",
        "photoUrl": "instructor_image_url",
        "description": [
          "instructor_description"
        ]
      }
    ]
  },
  "getPricingCourse1DetailsSecButton": {
    "title": "button_title",
    "Addtowhishlist": "add_to_wishlist_text"
  }
};

// Define the filenames
const files = [
  "AdobePremiereProBasics.json", "Fundamentalsofcinematography.json", "DaVinciResolveBasics.json",
  "AudioRecordingBasics.json", "ActingBasics.json", "FundamentalsOfFilmProduction.json",
  "VegasProBasics.json", "WorkingInTheFilmIndustry.json", "FundamentalsOfFilmDirecting.json",
  "ScreenwritingBasics.json", "IntroductiontoFilmMaking.json",
  "AdobePremiereProBasicsAr.json", "FundamentalsofcinematographyAr.json", "DaVinciResolveBasicsAr.json",
  "AudioRecordingBasicsAr.json", "ActingBasicsAr.json", "FundamentalsOfFilmProductionAr.json",
  "VegasProBasicsAr.json", "WorkingInTheFilmIndustryAr.json", "FundamentalsOfFilmDirectingAr.json",
  "ScreenwritingBasicsAr.json", "IntroductiontoFilmMakingAr.json"
];

// Create each JSON file
files.forEach(file => {
  const filePath = `./${file}`; // Save files in the current directory
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2)); // Write the file with pretty-print
  console.log(`File ${file} created successfully.`);
});
