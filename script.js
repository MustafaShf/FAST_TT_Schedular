// Simulated course data (sample from your file parsing)
const courses = {
    'DS2003': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Advanced Statistics'}
    ]},
    'MT1008': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Multivariable Calculus'}
    ]},
    'BA4001': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Decision Science for Business'}
    ]},
    'CS3002': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Information Security'}
    ]},
    'AI4007': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Applied Artificial Intelligence'}
    ]},
    'MT2005': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Probability and Statistics'}
    ]},
    'SS1008': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Communication and Presentation Skills'}
    ]},
    'CV1003': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Engineering Surveying'}
    ]},
    'MG5043': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Human Resource Management'}
    ]},
    'MG2003': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Consumer Behaviour'}
    ]},
    'CS4084': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Quantum Computing'}
    ]},
    'CS4064': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Advance Database Concepts'}
    ]},
    'SE2002': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Software Design and Architecture'}
    ]},
    'EE2003': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Computer Organization and Assembly Language'}
    ]},
    'SS2015': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'German Language'}
    ]},
    'SS1003': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Pakistan Studies'}
    ]},
    'CV4008': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Fundamentals of Dynamics and its Applications'}
    ]},
    'EE1001': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Linear Circuit Analysis'}
    ]},
    'MG5011': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Advanced Research Methods'}
    ]},
    'CS4002': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Applied Programming'}
    ]},
    'AF2002': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Corporate Accounting – II'}
    ]},
    'SS2006': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Macro Economics'}
    ]},
    'CS3009': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Software Engineering'}
    ]},
    'SS1014': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Expository Writing'}
    ]},
    'BA5004': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Machine Learning Models for Business Analytics'}
    ]},
    'AI4003': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Applied Machine Learning'}
    ]},
    'SS2010': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Communication Skills'}
    ]},
    'MG4008': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Business Ethics'}
    ]},
    'CV3007': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Mechanics of Solids-II'}
    ]},
    'MG4010': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Marketing'}
    ]},
    'CS3004': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Software Design and Analysis'}
    ]},
    'SS4001': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'American History'}
    ]},
    'DS3002': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Data Mining'}
    ]},
    'AF3003': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Financial Institutions and Markets'}
    ]},
    'CS4051': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Information Retrieval'}
    ]},
    'CV2009': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Engineering Graphics &amp; Constructions'}
    ]},
    'CS3016': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Cyber Security Tools and Technologies'}
    ]},
    'MG1004': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Business Calculus II'}
    ]},
    'AF1002': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Financial Accounting'}
    ]},
    'MG5006': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Marketing Analytics'}
    ]},
    'CS5005': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Advanced Analysis of Algorithms'}
    ]},
    'CS4080': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Mining Massive Datasets'}
    ]},
    'CS4039': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Software for Mobile Devices'}
    ]},
    'CS4063': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Natural Language Processing'}
    ]},
    'MG5007': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'New Trend in HRM'}
    ]},
    'MG4038': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Hazards and Disaster Management'}
    ]},
    'MG4002': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Communication for Managers'}
    ]},
    'AF2031': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Accounting and Finance'}
    ]},
    'SE1001': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Introduction to Software Engineering'}
    ]},
    'ME2001': {'Day': 'Wednesday', 'Date': '03-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Basic Mechanical Engineering'}
    ]},
    'AF5003': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Financial Reporting and Analysis'}
    ]},
    'CV3008': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Structural Analysis-II'}
    ]},
    'MG3010': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Methods in Business Research'}
    ]},
    'MG5017': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Strategic Marketing'}
    ]},
    'SS2039': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'International Relations'}
    ]},
    'MG5013': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Finance for Managers'}
    ]},
    'MT4031': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Operations Research'}
    ]},
    'MT1006': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Differential Equations'}
    ]},
    'MG5047': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Decision Science for Business'}
    ]},
    'AF4007': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Financial Risk Mgmt.'}
    ]},
    'SS4002': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Foreign Policy of Pakistan'}
    ]},
    'DS2004': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Fundamental of Big Data Analytics'}
    ]},
    'MT2006': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Probability and Statistics'}
    ]},
    'MG1002': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Marketing Management'}
    ]},
    'MG2005': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Cost and Management Accounting'}
    ]},
    'BA5005': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Applied Calculus for Business'}
    ]},
    'EE2010': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Electro-Mechanical Systems'}
    ]},
    'CS2018': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Operating Systems'}
    ]},
    'CV4010': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Design of Structures'}
    ]},
    'CS4049': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Blockchain and Cryptocurrency'}
    ]},
    'SE3003': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Web Engineering'}
    ]},
    'CS1005': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Discrete Structures'}
    ]},
    'CV4007': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Geotechnical and Foundation Engg.'}
    ]},
    'SS2036': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Modern Politics and Government'}
    ]},
    'MG4004': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Applied Statistics for Business'}
    ]},
    'NS2002': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Environmental Studies'}
    ]},
    'SS2003': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Psychology'}
    ]},
    'MG3035': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'International Business'}
    ]},
    'CS4059': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Fundamentals of Computer Vision'}
    ]},
    'CV4011': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Irrigation and Drainage Engineering'}
    ]},
    'MG3002': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Business Law'}
    ]},
    'CS2006': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Operating Systems'}
    ]},
    'BA2006': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Fundamentals of Business Analytics'}
    ]},
    'EE3034': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'VLSI'}
    ]},
    'CS3005': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Theory of Automata'}
    ]},
    'CV2006': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Structural Analysis-I'}
    ]},
    'DS5004': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Machine Learning for Data Science'}
    ]},
    'SS1006': {'Day': 'Thursday', 'Date': '04-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'English – II'}
    ]},
    'MG4033': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Digital Marketing'}
    ]},
    'CS2005': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Database Systems'}
    ]},
    'Friday Prayer break': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'nan'}
    ]},
    'CS5059': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Database System'}
    ]},
    'CS3001': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Computer Networks'}
    ]},
    'MG5012': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Managing Human Resources'}
    ]},
    'CS4036': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Software Testing'}
    ]},
    'MG4034': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Human Resource Metrics'}
    ]},
    'CS2011': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Fundamentals of Databases'}
    ]},
    'CS2001': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Data Structures'}
    ]},
    'BA4004': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Business Analytics'}
    ]},
    'MT1004': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Linear Algebra'}
    ]},
    'CS4086': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Environmental Data Science'}
    ]},
    'EE4050': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'RISC-V in Modern Computer Systems'}
    ]},
    'CS4031': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Compiler Construction'}
    ]},
    'MG5032': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Supply Chain Management'}
    ]},
    'MT2004': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Business Math – II'}
    ]},
    'CS4037': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Introduction to Cloud Computing'}
    ]},
    'BA3001': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Machine Learning for Business Analytics'}
    ]},
    'SE4001': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Software Re-Engineering'}
    ]},
    'CS4061': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Ethical Hacking Concepts and Practices'}
    ]},
    'CS3006': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Parallel and Distributed Computing'}
    ]},
    'SS2005': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Sociology'}
    ]},
    'CS4043': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Advanced Programming'}
    ]},
    'MG3007': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Construction Engineering and Management'}
    ]},
    'CV3006': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Environmental Engg.-I'}
    ]},
    'EE2012': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Computer Organization and Architecture'}
    ]},
    'SS1002': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Islamic Studies/Ethics'}
    ]},
    'SS1013': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Ideology and Constitution of Pakistan'}
    ]},
    'NS1004': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Engineering Mechanics'}
    ]},
    'CV2008': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Quantity Surveying and Estimation'}
    ]},
    'CV4005': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Steel Structures'}
    ]},
    'EE2011': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Probability and Random Processes'}
    ]},
    'MG3008': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Engineering Economics'}
    ]},
    'MG2002': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Engineering Economics'}
    ]},
    'MG4005': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Business Economics for Managers'}
    ]},
    'MG4050': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Sustainable Production and Consumption'}
    ]},
    'SS1007': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Islamic Studies/Ethics'}
    ]},
    'AF5001': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Applied Corporate Finance'}
    ]},
    'AF1001': {'Day': 'Friday', 'Date': '05-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Fundamentals of Accounting'}
    ]},
    'SS2040': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Mass Communication'}
    ]},
    'CV4009': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Hydraulic Engineering'}
    ]},
    'CS1003': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Computer Programming'}
    ]},
    'AF4008': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Taxation'}
    ]},
    'EE3004': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Feedback Control System'}
    ]},
    'MG2008': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Data Analysis for Business I'}
    ]},
    'MG4011': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Entrepreneurship'}
    ]},
    'SS2032': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Chinese Language'}
    ]},
    'CS4032': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Web Programming'}
    ]},
    'EE1005': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Digital Logic Design'}
    ]},
    'EE2008': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Signals and Systems'}
    ]},
    'MG5024': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Cases in Management'}
    ]},
    'SE4032': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Business Process Engineering'}
    ]},
    'BA5001': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Inferential Statistics and Descriptive Modelling'}
    ]},
    'SS2038': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Critical Thinking'}
    ]},
    'CS2003': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Data Structures and Business Applications'}
    ]},
    'CS4055': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Digital Image Processing'}
    ]},
    'CV3004': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Transportation planning and Engineering'}
    ]},
    'CS2009': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Design and Analysis of Algorithms'}
    ]},
    'SS2037': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Organizational Behavior'}
    ]},
    'AF4001': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Accounting for Managers'}
    ]},
    'CS1002': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Programming Fundamentals'}
    ]},
    'CS1004': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Object Oriented Programming'}
    ]},
    'CS2004': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Fundamentals of Software Engineering'}
    ]},
    'CS2008': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Numerical Computing'}
    ]},
    'AI2002': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Artificial Intelligence'}
    ]},
    'MG3033': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Principles of Leadership'}
    ]},
    'CS4048': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Data Science'}
    ]},
    'NS1003': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Engineering Geology'}
    ]},
    'MG3001': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Legal and Ethical Issues in Business Analytics'}
    ]},
    'MG5015': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '09:00 - 10:00', 'Session': 'Strategic HR and Leadership'}
    ]},
    'SE2003': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Formal Methods'}
    ]},
    'MG3013': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '12:00 - 13:00', 'Session': 'Brand Management'}
    ]},
    'SS3001': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Business Communication–II'}
    ]},
    'MT2007': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Numerical Analysis'}
    ]},
    'AF3002': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Financial Statement Analysis'}
    ]},
    'SS2018': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Sociology'}
    ]},
    'BA5002': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Data Driven Decision Making and Optimization'}
    ]},
    'AF2004': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Business Finance'}
    ]},
    'CS2016': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '14:00 - 15:00', 'Session': 'Programming for Business'}
    ]},
    'CS4001': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Professional Practices in IT'}
    ]},
    'CS4089': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '10:30 - 11:30', 'Session': 'Programming for Business Applications'}
    ]},
    'IO4041': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Introduction to the Internet of Things'}
    ]},
    'MG4009': {'Day': 'Saturday', 'Date': '06-Apr-2024', 'Details': [
        {'Time': '15:30 - 16:30', 'Session': 'Managerial Economics'}
    ]},
};
function addCourse() {
    const courseInput = document.getElementById('course-input');
    const courseCode = courseInput.value.trim().toUpperCase();
    const timetable = document.getElementById('timetable');
    if (courses[courseCode]) {
        courses[courseCode].Details.forEach(detail => {
            const row = timetable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            cell1.textContent = courseCode;
            cell2.textContent = courses[courseCode].Day;
            cell3.textContent = courses[courseCode].Date;
            cell4.textContent = detail.Time;
            cell5.textContent = detail.Session;
        });
        courseInput.value = ''; // Clear input after adding
    } else {
        alert('Course code not found!');
    }
}
function saveAsPNG() {
    html2canvas(document.getElementById('imageContainer')).then(canvas => {
        const a = document.createElement('a');
        a.href = canvas.toDataURL();
        a.download = 'timetable.png';
        a.click();
    });
}

function toggleDropdown(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px'; // Hide sidebar
        sidebar.style.display = 'none';
    } else {
        sidebar.style.left = '0'; // Show sidebar
        sidebar.style.display = 'block';
    }
}
