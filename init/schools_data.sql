-- Use the created database
USE school_management;

-- Count the number of schools before inserting new data
SELECT COUNT(*) INTO @before_count FROM schools;

INSERT INTO schools (name, address, latitude, longitude) VALUES
('Delhi Public School', '12, Sector XII, R.K. Puram, New Delhi, Delhi 110022', 28.5665, 77.2100),
('Modern School', '45, Barakhamba Road, Connaught Place, New Delhi, Delhi 110001', 28.6305, 77.2245),
('Springdales School', '201, Pusa Road, Karol Bagh, New Delhi, Delhi 110005', 28.6412, 77.1905),
('St. Columbas School', '7, Ashok Place, Gole Market, New Delhi, Delhi 110001', 28.6330, 77.2125),
('Carmel Convent School', '195, Malcha Marg, Chanakyapuri, New Delhi, Delhi 110021', 28.5922, 77.1880),

('Delhi Public School', '195, GJ SH 133, Vavol, Gandhinagar, Gujarat 382016', 23.2232, 72.6396),
('St. Xaviers School', 'Sector 8, GH Road, Gandhinagar, Gujarat 382008', 23.2188, 72.6442),
('Kendriya Vidyalaya ONGC', '34, Sector 24, Gandhinagar, Gujarat 382024', 23.2350, 72.6520),
('Podar International School', '101, Sector 1, Koba Road, Gandhinagar, Gujarat 382007', 23.2190, 72.6285),
('Shree Swaminarayan Gurukul', 'Gurukul Road, Near Infocity, Gandhinagar, Gujarat 382421', 23.2285, 72.6498),

('Bombay Scottish School', '53, Veer Savarkar Road, Mahim West, Mumbai, Maharashtra 400016', 19.0347, 72.8400),
('Don Bosco High School', '132, Mathuradas Vasanji Road, Matunga, Mumbai, Maharashtra 400019', 19.0265, 72.8550),
('Cathedral & John Connon School', '6, Picket Road, Fort, Mumbai, Maharashtra 400001', 18.9385, 72.8352),
('St. Xaviers High School', '47, Lokmanya Tilak Road, Dhobi Talao, Mumbai, Maharashtra 400002', 18.9482, 72.8310),
('Dhirubhai Ambani International School', 'Bandra-Kurla Complex, Bandra East, Mumbai, Maharashtra 400051', 19.0675, 72.8673),

('Bishop Cotton Boys School', '15, Residency Road, Ashok Nagar, Bangalore, Karnataka 560025', 12.9716, 77.5970),
('Baldwin Boys High School', '14, Hosur Road, Richmond Town, Bangalore, Karnataka 560025', 12.9625, 77.6015),
('National Public School', '12, 12th Main, Indiranagar, Bangalore, Karnataka 560038', 12.9710, 77.6410),
('Inventure Academy', 'Kanakapura Road, Whitefield-Sarjapur, Bangalore, Karnataka 562125', 12.8995, 77.7120),
('Greenwood High International School', 'Chikka Hagade Road, Varthur, Bangalore, Karnataka 560087', 12.9435, 77.7140),

('The Bishops School', '5, Camp Road, Pune, Maharashtra 411001', 18.5159, 73.8766),
('St. Marys School', '7, Cantonment Area, MG Road, Pune, Maharashtra 411001', 18.5168, 73.8840),
('Delhi Public School', 'Nyati County, Mohammed Wadi, Pune, Maharashtra 411060', 18.4575, 73.8905),
('Symbiosis International School', '232, Viman Nagar, Pune, Maharashtra 411014', 18.5673, 73.9145),
('Vidya Valley School', 'Sus Road, Pashan, Pune, Maharashtra 411021', 18.5530, 73.7765);


-- Count the number of schools inserted by this file
SELECT CONCAT((COUNT(*) - @before_count), ' school records inserted from file') AS message FROM schools;
