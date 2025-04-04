import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"hi",
    resources:{
        en:{
            translation:{
                h:"Home",
                a:"About",
                s:"Services",
                c:"Contact",
                d:"Donate",
                gh:"Get Help Now",
                miss:"About Our Mission",
                miss1:"At HealthConnect, we believe that access to quality healthcare is a fundamental right, not a privilege. Our mission is to bridge the healthcare gap in underserved communities through technology, education, and community-based initiatives. We work with local healthcare providers,community organizations, and technology partners to develop sustainable solutions that address the unique challenges faced by each community.",
                miss2:"Our vision is a world where everyone has equal access to the healthcare they need, regardless of their geographic location, socioeconomic status, or other barriers.We're committed to empowering individuals and communities with the resources, knowledge, and tools they need to take control of their health.",
                learn:"Learn More",
                pp:"Privacy Policy",
                ql:"Quick Links",
                os:"Our Services",
                tele:"Telemedicine",
                res:"Health Resources",
                cs:"Community Support",
                fc:"Find a Clinic",
                teleline:"Connect with healthcare providers remotely through secure video consultations.",
                docdir:"Find and connect with top specialists in various medical fields with ratings and pricing.",
                dd:"Doctor Directory",
                csline:'Join support groups and connect with others facing similar health challenges.',
                fcline:"Locate affordable healthcare facilities and specialized care centers near you.",
                fea:"Features",
                fealine:"Empowering communities through accessible healthcare solutions",
                hero:"Bringing Healthcare Closer to Underserved Communities",
                hero2:"Innovative, scalable, and sustainable solutions to improve access to healthcare.",
                hero3:"Explore Solutions",
                sj:'Dr. Sarah Johnson',
                cardio:'Cardiologist',
                mc:'Dr. Michael Chen',
                neuro:'Neurologist',
                ap:'Dr. Amelia Patel',
                ped:'Pediatrician',
                or:'Orthopedic Surgeon',
                dr:'Dermatologist',
                ps:'Psychiatrist',
                rw:'Robert Williams',
                er:'Emily Rodriguez',  
                dw:'David Kim', 


        
            }
        },
        hi:{
            translation:{
                h:"होम",
                a:"हमारे बारे में",
                s:"सेवाएं",
                c:"संपर्क करें",
                d:"दान करें",
                gh:"अब मदद प्राप्त करें",
                miss:"हमारा विशेष कार्य",
                miss1:"HealthConnect में, हम मानते हैं कि गुणवत्तापूर्ण स्वास्थ्य सेवा तक पहुंच एक मौलिक अधिकार है, न कि विशेषाधिकार। हमारा मिशन तकनीक, शिक्षा और सामुदायिक पहलों के माध्यम से underserved समुदायों में स्वास्थ्य सेवा के अंतर को पाटना है। हम स्थानीय स्वास्थ्य सेवा प्रदाताओं, सामुदायिक संगठनों और तकनीकी भागीदारों के साथ मिलकर प्रत्येक समुदाय द्वारा सामना की जाने वाली अनूठी चुनौतियों को संबोधित करने वाले टिकाऊ समाधान विकसित करने के लिए काम करते हैं।",
                miss2:"हमारा दृष्टिकोण एक ऐसा विश्व है जहाँ हर किसी को उनकी आवश्यक स्वास्थ्य सेवा तक समान पहुँच प्राप्त है, चाहे उनकी भौगोलिक स्थिति, आर्थिक स्थिति या अन्य बाधाएँ कुछ भी हों। हम व्यक्तियों और समुदायों को उन संसाधनों, ज्ञान और उपकरणों से सशक्त बनाने के लिए प्रतिबद्ध हैं जिनकी उन्हें अपने स्वास्थ्य पर नियंत्रण पाने की आवश्यकता है।",
                learn:"और जानें",
                pp:"सार्वजनिक नीति",
                ql:"त्वरित लिंक",
                os:"हमारी सेवाएं",
                tele:"दूरभाष चिकित्सा",
                res:"स्वास्थ्य संसाधन",
                cs:"सामुदायिक समर्थन",
                fc:"क्लिनिक खोजें",
                teleline:"सुरक्षित वीडियो परामर्श के माध्यम से स्वास्थ्य सेवा प्रदाताओं के साथ जुड़ें।",
                docdir:"विशिष्ट चिकित्सा क्षेत्रों में शीर्ष विशेषज्ञों से कनेक्ट करें और रेटिंग और मूल्य निर्धारण के साथ।",
                dd:"डॉक्टर निर्देशिका",
                csline:'सामुदायिक समर्थन समूहों में शामिल हों और समान स्वास्थ्य चुनौतियों का सामना करने वाले अन्य लोगों से जुड़ें।',
                fcline:"आपके पास सस्ती स्वास्थ्य देखभाल सुविधाओं और विशेष देखभाल केंद्रों को खोजने के लिए।",
                fea:"विशेषताएँ",
                fealine:"सुलभ स्वास्थ्य देखभाल समाधानों के माध्यम से समुदायों को सशक्त बनाना",
                hero:"अविकसित समुदायों के लिए स्वास्थ्य सेवा को करीब लाना",
                hero2:"स्वास्थ्य सेवा तक पहुंच में सुधार के लिए अभिनव, स्केलेबल और टिकाऊ समाधान।",
                hero3:"समाधान अन्वेषण करें",
                sj:'डॉ। सारा जॉनसन',
                cardio:'हृदय रोग विशेषज्ञ',
                mc:'डॉ। माइकल चेन',
                neuro:'तंत्रिका विज्ञानी',
                ap:'डॉ। अमेलिया पटेल',
                or:'अर्थोपेडिक सर्जन',
                ped:'बाल रोग विशेषज्ञ',
                dr:'त्वचाविज्ञानी',
                ps:'मनोचिकित्सक',
                rw:'रॉबर्ट विलियम्स',
                er:'एमिली रोड्रिगेज',
                dw:'डेविड किम',

            }

        },
        bn:{
            translation:{
                "h": "হোম",
                "a": "আমাদের সম্পর্কে",
                "s": "সেবা",
                "c": "যোগাযোগ",
                "d": "দান করুন",
                "gh": "এখনই সাহায্য নিন",
                "miss": "আমাদের মিশন সম্পর্কে",
                "miss1": "HealthConnect-এ, আমরা বিশ্বাস করি যে মানসম্পন্ন স্বাস্থ্যসেবার অধিকার সকলের থাকা উচিত। আমাদের লক্ষ্য হল প্রযুক্তি, শিক্ষা এবং কমিউনিটি-ভিত্তিক উদ্যোগের মাধ্যমে পিছিয়ে পড়া সম্প্রদায়গুলোর স্বাস্থ্যসেবা ব্যবস্থায় সেতুবন্ধন গড়ে তোলা। আমরা স্থানীয় স্বাস্থ্যসেবা প্রদানকারী, কমিউনিটি সংগঠন এবং প্রযুক্তি অংশীদারদের সঙ্গে কাজ করি যাতে প্রতিটি সম্প্রদায়ের নির্দিষ্ট চ্যালেঞ্জ মোকাবেলায় টেকসই সমাধান তৈরি করা যায়।",
                "miss2": "আমাদের দৃষ্টিভঙ্গি একটি এমন পৃথিবী গঠন করা যেখানে প্রত্যেকে, তাদের ভৌগলিক অবস্থান বা আর্থসামাজিক অবস্থা নির্বিশেষে, প্রয়োজনীয় স্বাস্থ্যসেবা পেতে পারে। আমরা ব্যক্তিদের এবং সম্প্রদায়গুলিকে স্বাস্থ্যসম্পর্কিত জ্ঞান, সম্পদ ও সরঞ্জাম দিয়ে সক্ষম করে তুলতে প্রতিশ্রুতিবদ্ধ।",
                "learn": "আরও জানুন",
                "pp": "গোপনীয়তা নীতি",
                "ql": "দ্রুত লিঙ্ক",
                "os": "আমাদের সেবা",
                "tele": "টেলিমেডিসিন",
                "res": "স্বাস্থ্যসম্পদ",
                "cs": "কমিউনিটি সহায়তা",
                "fc": "ক্লিনিক খুঁজুন",
                "teleline": "নিরাপদ ভিডিও কনসালটেশনের মাধ্যমে চিকিৎসকদের সাথে দূর থেকে সংযুক্ত হন।",
                "docdir": "বিভিন্ন চিকিৎসা ক্ষেত্রে শীর্ষ বিশেষজ্ঞদের রেটিং এবং মূল্য সহ খুঁজুন ও যোগাযোগ করুন।",
                "dd": "চিকিৎসক ডিরেক্টরি",
                "csline": "সহযোগিতা গোষ্ঠীতে যোগ দিন এবং একই রকম স্বাস্থ্য সমস্যার মুখোমুখি অন্যদের সঙ্গে সংযোগ স্থাপন করুন।",
                "fcline": "আপনার কাছাকাছি সাশ্রয়ী মূল্যের স্বাস্থ্যসেবা কেন্দ্র এবং বিশেষায়িত ক্লিনিক খুঁজুন।",
                "fea": "বৈশিষ্ট্য",
                "fealine": "সহজলভ্য স্বাস্থ্যসেবা সমাধানের মাধ্যমে সম্প্রদায়কে ক্ষমতায়ন করা",
                "hero": "অবহেলিত সম্প্রদায়ের কাছাকাছি স্বাস্থ্যসেবা পৌঁছে দিচ্ছে",
                "hero2": "স্বাস্থ্যসেবায় প্রবেশাধিকার উন্নয়নের জন্য উদ্ভাবনী, স্কেলযোগ্য ও টেকসই সমাধান।",
                "hero3": "সমাধান এক্সপ্লোর করুন",
                "sj": "ডা. সারা জনসন",
                "cardio": "কার্ডিওলজিস্ট",
                "mc": "ডা. মাইকেল চেন",
                "neuro": "নিউরোলজিস্ট",
                "ap": "ডা. অ্যামেলিয়া প্যাটেল",
                "ped": "পেডিয়াট্রিশিয়ান",
                "or": "অর্থোপেডিক সার্জন",
                "dr": "ডার্মাটোলজিস্ট",
                "ps": "সাইকিয়াট্রিস্ট",
                "rw": "রবার্ট উইলিয়ামস",
                "er": "এমিলি রদ্রিগেজ",
                "dw": "ডেভিড কিম"
              }
              
        },
        ta:{
            translation:{
                "h": "முகப்பு",
                "a": "எங்களைப் பற்றி",
                "s": "சேவைகள்",
                "c": "தொடர்பு கொள்ள",
                "d": "தானம் செய்யவும்",
                "gh": "இப்போது உதவி பெறுங்கள்",
                "miss": "எங்கள் பணியைப் பற்றி",
                "miss1": "HealthConnect-ல், தரமான மருத்துவ சேவைகள் ஒரு உரிமையாக இருக்க வேண்டும் என்ற நம்பிக்கையில் செயல்படுகிறோம். புறக்கணிக்கப்பட்ட சமூகங்களுக்கு தொழில்நுட்பம், கல்வி மற்றும் சமூக அடிப்படையிலான முயற்சிகள் மூலம் மருத்துவ சேவைகளை அணுகக்கூடியதாக மாற்றுவதே எங்கள் பணி. ஒவ்வொரு சமூகத்தின் தனிப்பட்ட தேவைகளுக்கேற்ப நிலையான தீர்வுகளை உருவாக்க, உள்ளூர் மருத்துவ சேவையாளர், சமூக அமைப்புகள் மற்றும் தொழில்நுட்ப பங்குதாரர்களுடன் நாங்கள் இணைந்து பணியாற்றுகிறோம்.",
                "miss2": "எங்கள் பார்வை - எங்கிருந்தும், யாரும் தங்களின் இருப்பிடம், பொருளாதார நிலை அல்லது பிற தடைகள் ஏதுவாக இருந்தாலும் தேவையான மருத்துவ சேவைகளை சமமாக பெறக்கூடிய ஒரு உலகை உருவாக்குவதே. நாங்கள் தனிநபர்கள் மற்றும் சமூகங்களை அவர்கள் சுயமாக சுகாதாரத்தைக் கையாள தேவையான அறிவு, வளங்கள் மற்றும் கருவிகள் மூலம் அதிகாரமளிக்க உறுதிபூண்டுள்ளோம்.",
                "learn": "மேலும் அறிக",
                "pp": "தனியுரிமைக் கொள்கை",
                "ql": "விரைவு இணைப்புகள்",
                "os": "எங்கள் சேவைகள்",
                "tele": "தொலைமருத்துவம்",
                "res": "மருத்துவ ஆதாரங்கள்",
                "cs": "சமூக ஆதரவு",
                "fc": "மருத்துவமனை தேடுங்கள்",
                "teleline": "பாதுகாப்பான வீடியோ ஆலோசனைகள் மூலம் மருத்துவர்களுடன் தொலைவில் இணைக.",
                "docdir": "விவரங்களுடன் மற்றும் மதிப்பீடுகளுடன் பல துறைகளில் சிறந்த நிபுணர்களைத் தேடி தொடர்பு கொள்ளுங்கள்.",
                "dd": "மருத்துவர் அடைவு",
                "csline": "சமூக ஆதரவு குழுக்களில் சேரவும், ஒரே நிலைமையை எதிர்கொள்கிறவர்களுடன் இணைக.",
                "fcline": "உங்களுக்கு அருகிலுள்ள மலிவான மருத்துவ வசதிகள் மற்றும் நிபுணர் நிலையங்களைத் தேடுங்கள்.",
                "fea": "அம்சங்கள்",
                "fealine": "அணுகக்கூடிய மருத்துவ தீர்வுகள் மூலம் சமூகங்களை மேம்படுத்துகிறோம்",
                "hero": "மருத்துவ சேவைகளை புறக்கணிக்கப்பட்ட சமூகங்களின் அருகே கொண்டு வருகிறோம்",
                "hero2": "மருத்துவ அணுகலை மேம்படுத்தக்கூடிய புதுமையான, அளவீட்டுக்குரிய மற்றும் நிலையான தீர்வுகள்.",
                "hero3": "தீர்வுகளை ஆய்வு செய்யவும்",
                "sj": "டாக்டர். சாரா ஜான்சன்",
                "cardio": "இதயநோயியல் நிபுணர்",
                "mc": "டாக்டர். மைக்கேல் சென்",
                "neuro": "நரம்பியல் நிபுணர்",
                "ap": "டாக்டர். அமேலியா பட்டேல்",
                "ped": "மருத்துவக் குழந்தைகள் நிபுணர்",
                "or": "எலும்பியல் அறுவை சிகிச்சை நிபுணர்",
                "dr": "தோல் நிபுணர்",
                "ps": "மனநல நிபுணர்",
                "rw": "ராபர்ட் வில்லியம்ஸ்",
                "er": "எமிலி ரோட்ரிகஸ்",
                "dw": "டேவிட் கிம்"
              }
              
        },
    }
})