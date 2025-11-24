window.rawTopics = window.rawTopics || [];
window.rawTopics.push({
    id: 'ratio',
    title: 'יחס ופרופורציה',
    icon: 'Star',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
    studyMaterial: {
        title: 'שיטת השלבים',
        points: [
            { title: '1. חיבור', text: 'מחברים את מספרי היחס (למשל 2:3 זה 5 יחידות סה"כ).' },
            { title: '2. חילוק', text: 'לוקחים את השלם ומחלקים בסכום שיצא. כך מוצאים כמה שווה "יחידה אחת".' },
            { title: '3. כפל', text: 'מכפילים את השווי של יחידה אחת בכל אחד מחלקי היחס המקוריים.' },
            { title: '💡 דוגמה', text: 'בכיתה 35 תלמידים, יחס 3:4\nשלב 1:\n3 + 4 = 7 (סה"כ יחידות)\nשלב 2:\n35 ÷ 7 = 5 (כל יחידה)\nשלב 3:\nבנים (3 יחידות) = 3 × 5 = 15\nבנות (4 יחידות) = 4 × 5 = 20\nבדיקה:\n15 + 20 = 35' }
        ]
    },
    questions: [
        {
            type: 'input',
            q: 'היחס בין בנים לבנות הוא 2:3. כמה יחידות יחס יש סה"כ?',
            correct: '5',
            explanation: 'מחברים את המספרים:\n2 + 3 = 5'
        },
        {
            type: 'input',
            q: 'מחלקים 20 סוכריות ביחס של 1:4. כמה סוכריות יקבל הילד עם החלק הקטן?',
            correct: '4',
            explanation: 'סה"כ 5 יחידות יחס. כל יחידה שווה 4 (20 לחלק ל-5). החלק הקטן הוא 1 (יחידה אחת) כפול 4.'
        },
        {
            type: 'multiple',
            q: 'אם היחס בין קמח לסוכר הוא 2:1, ויש 300 גרם תערובת. כמה גרם סוכר יש?',
            options: ['100', '200', '150', '50'],
            correct: '100',
            explanation: 'סה"כ 3 יחידות (2+1). כל יחידה שווה 100 (300/3). הסוכר הוא יחידה אחת, ולכן 100 גרם.'
        },
        {
            type: 'multiple',
            q: 'איזה יחס שווה ליחס 10:20?',
            options: ['1:2', '1:3', '2:1', '1:5'],
            correct: '1:2',
            explanation: 'אם נצמצם את שני המספרים ב-10 (נחלק ב-10), נקבל 1 ו-2.'
        },
        {
            type: 'input',
            q: 'בכיתה יש 35 תלמידים. היחס בין בנים לבנות הוא 3:4. כמה בנים יש?\n(כתוב רק את המספר)',
            correct: '15',
            explanation: 'סה"כ 7 יחידות (3+4). כל יחידה שווה 5 (35÷7).\nבנים = 3×5 = 15'
        },
        {
            type: 'input',
            q: 'בכיתה יש 35 תלמידים. היחס בין בנים לבנות הוא 3:4. כמה בנות יש?\n(כתוב רק את המספר)',
            correct: '20',
            explanation: 'סה"כ 7 יחידות (3+4). כל יחידה שווה 5 (35÷7).\nבנות = 4×5 = 20'
        },
        {
            type: 'multiple',
            q: 'מחלקים 60 שוקולדים ביחס של 2:3. כמה שוקולדים יקבל החלק הגדול?',
            options: ['36', '24', '30', '40'],
            correct: '36',
            explanation: 'סה"כ 5 יחידות (2+3). כל יחידה שווה 12 (60÷5).\nהחלק הגדול (3 יחידות) = 3×12 = 36'
        },
        {
            type: 'input',
            q: 'היחס בין קמח לסוכר הוא 5:1. אם יש 120 גרם תערובת, כמה גרם קמח יש?\n(כתוב רק את המספר)',
            correct: '100',
            explanation: 'סה"כ 6 יחידות (5+1). כל יחידה שווה 20 (120÷6).\nקמח (5 יחידות) = 5×20 = 100'
        },
        {
            type: 'multiple',
            q: 'מחלקים כסף ביחס של 1:2:3. אם הסך הכל הוא 60 שקל, כמה יקבל החלק הקטן ביותר?',
            options: ['10', '20', '30', '15'],
            correct: '10',
            explanation: 'סה"כ 6 יחידות (1+2+3). כל יחידה שווה 10 (60÷6).\nהחלק הקטן (1 יחידה) = 10'
        },
        {
            type: 'input',
            q: 'היחס בין אורך לרוחב הוא 4:3. אם האורך הוא 20 ס"מ, מה הרוחב?\n(כתוב רק את המספר)',
            correct: '15',
            explanation: 'אם האורך (4 יחידות) הוא 20, אז כל יחידה שווה 5 (20÷4).\nהרוחב (3 יחידות) = 3×5 = 15'
        },
        {
            type: 'multiple',
            q: 'מחלקים 48 תפוחים ביחס של 1:3. כמה תפוחים יקבל החלק הקטן?',
            options: ['12', '16', '24', '36'],
            correct: '12',
            explanation: 'סה"כ 4 יחידות (1+3). כל יחידה שווה 12 (48÷4).\nהחלק הקטן (1 יחידה) = 12'
        },
        {
            type: 'multiple',
            q: 'איזה יחס שקול ליחס 3:9?',
            options: ['1:3', '1:2', '3:1', '1:4'],
            correct: '1:3',
            explanation: 'מצמצמים ב-3: 3 לחלק ל-3 זה 1, 9 לחלק ל-3 זה 3.'
        },
        {
            type: 'input',
            q: 'אם היחס בין תפוחים לאגסים הוא 2:5 ויש 14 תפוחים, כמה אגסים יש?',
            correct: '35',
            explanation: 'התפוחים (2 יחידות) הם 14, אז כל יחידה שווה 7. האגסים (5 יחידות) הם 5 כפול 7 שזה 35.'
        },
        {
            type: 'multiple',
            q: 'בכיתה היחס בין בנים לבנות הוא 1:1. מה זה אומר?',
            options: ['מספר הבנים שווה למספר הבנות', 'יש יותר בנים', 'יש יותר בנות', 'יש פי 2 בנות'],
            correct: 'מספר הבנים שווה למספר הבנות',
            explanation: 'יחס 1:1 אומר שהכמויות שוות בדיוק.'
        },
        {
            type: 'input',
            q: 'מחלקים 100 שקל ביחס של 3:7. כמה שקלים יקבל החלק הקטן?',
            correct: '30',
            explanation: 'סה"כ 10 יחידות. כל יחידה שווה 10. החלק הקטן (3 יחידות) הוא 30.'
        },
        {
            type: 'multiple',
            q: 'מה היחס המצומצם של 50:100?',
            options: ['1:2', '1:5', '2:1', '5:1'],
            correct: '1:2',
            explanation: '50 נכנס ב-100 בדיוק פעמיים.'
        },
        {
            type: 'input',
            q: 'אם היחס בין מים לתרכיז הוא 4:1 ויש 200 מ"ל תרכיז, כמה מים צריך?',
            correct: '800',
            explanation: 'המים הם פי 4 מהתרכיז. 200 כפול 4 = 800.'
        },
        {
            type: 'multiple',
            q: 'יחס של 2:3 שקול ליחס של:',
            options: ['4:6', '3:2', '4:5', '6:10'],
            correct: '4:6',
            explanation: 'מכפילים את שני המספרים ב-2 ומקבלים 4:6.'
        },
        {
            type: 'input',
            q: 'במפה קנה המידה הוא 1:100. אם המרחק במפה הוא 5 ס"מ, מה המרחק במציאות (בס"מ)?',
            correct: '500',
            explanation: 'כל ס"מ במפה הוא 100 במציאות. 5 כפול 100 = 500.'
        },
        {
            type: 'multiple',
            q: 'אם מחלקים פיצה ל-8 משולשים ואוכלים 2, מה היחס בין מה שאכלנו למה שנשאר?',
            options: ['2:6', '2:8', '1:4', '6:2'],
            correct: '2:6',
            explanation: 'אכלנו 2, נשארו 6. היחס הוא 2:6 (שאפשר לצמצם ל-1:3).'
        },
        {
            type: 'input',
            q: 'היחס בין אורך לרוחב מלבן הוא 2:1. אם ההיקף הוא 30, מה האורך?',
            correct: '10',
            explanation: 'היקף מורכב מ-2 אורכים ו-2 רוחבים (סה"כ 6 יחידות יחס). כל יחידה שווה 5. האורך (2 יחידות) הוא 10.'
        },
        {
            type: 'multiple',
            q: 'איזה זוג יחסים הוא פרופורציה?',
            options: ['1:2 ו-3:6', '1:2 ו-2:5', '1:3 ו-2:5', '2:3 ו-3:4'],
            correct: '1:2 ו-3:6',
            explanation: '1:2 זה בדיוק כמו 3:6 (אם מצמצמים ב-3).'
        },
        {
            type: 'input',
            q: 'אם 3 ק"ג תפוחים עולים 12 שקל, כמה יעלו 5 ק"ג?',
            correct: '20',
            explanation: 'ק"ג אחד עולה 4 (12 לחלק ל-3). 5 ק"ג יעלו 20 (5 כפול 4).'
        },
        {
            type: 'multiple',
            q: 'מהו היחס ההפוך ל-3:4?',
            options: ['4:3', '3:4', '1:3', '1:4'],
            correct: '4:3',
            explanation: 'יחס הפוך פשוט הופך את הסדר.'
        },
        {
            type: 'input',
            q: 'בכד יש כדורים אדומים וכחולים ביחס 2:3. אם יש 15 כחולים, כמה אדומים יש?',
            correct: '10',
            explanation: 'הכחולים (3 יחידות) הם 15, אז כל יחידה שווה 5. האדומים (2 יחידות) הם 10.'
        },
        {
            type: 'multiple',
            q: 'אם מגדילים ציור ביחס של 1:2, האורך של כל קו:',
            options: ['גדל פי 2', 'קטן פי 2', 'נשאר אותו דבר', 'גדל פי 4'],
            correct: 'גדל פי 2',
            explanation: 'יחס הגדלה של 1:2 אומר שהחדש כפול מהישן.'
        },
        {
            type: 'input',
            q: 'היחס בין גיל האם לגיל הבת הוא 4:1. אם האם בת 40, בת כמה הבת?',
            correct: '10',
            explanation: 'האם (4 יחידות) בת 40, אז יחידה אחת שווה 10. הבת (יחידה אחת) בת 10.'
        },
        {
            type: 'multiple',
            q: 'איזה יחס גדול יותר: 1:2 או 1:3?',
            options: ['1:2', '1:3', 'הם שווים', 'לא ניתן להשוות'],
            correct: '1:2',
            explanation: 'חצי (1:2) גדול יותר משליש (1:3).'
        },
        {
            type: 'input',
            q: 'מחלקים 24 שעות ביממה לישנה וערות ביחס של 1:2. כמה שעות ישנים?',
            correct: '8',
            explanation: 'סה"כ 3 יחידות. כל יחידה שווה 8 (24 לחלק ל-3). השינה (יחידה אחת) היא 8 שעות.'
        },
        {
            type: 'multiple',
            q: 'אם היחס בין שני מספרים הוא 1:1, והסכום שלהם 20, מהם המספרים?',
            options: ['10 ו-10', '5 ו-15', '1 ו-19', '20 ו-0'],
            correct: '10 ו-10',
            explanation: 'מחלקים שווה בשווה.'
        }
    ]
});
