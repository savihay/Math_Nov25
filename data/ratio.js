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
        }
    ]
});
