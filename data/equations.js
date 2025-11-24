window.rawTopics = window.rawTopics || [];
window.rawTopics.push({
    id: 'equations',
    title: 'משוואות',
    icon: 'Calculator',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
    studyMaterial: {
        title: 'חוקים לפתרון נכון',
        points: [
            { title: 'סדר פעולות', text: '1. פתיחת סוגריים\n2. העברת אגפים (מספרים לצד אחד, איקסים לשני)\n3. כינוס איברים\n4. חילוק במקדם של x.' },
            { title: 'זהירות - מינוס!', text: 'מינוס לפני סוגריים הופך את כל הסימנים בפנים. דוגמה:\n-(x+2)\nהופך ל:\n-x - 2' },
            { title: 'העברת אגפים', text: 'כשמעבירים איבר מצד לצד של ה"שווה", הסימן שלו משתנה (פלוס הופך למינוס ולהפך).' },
            { title: '💡 דוגמה לפתרון', text: 'המשוואה:\n4(x - 2) - 3(x + 1) = 5\nשלב 1 - פתיחת סוגריים:\n4x - 8 - 3x - 3 = 5\nשלב 2 - כינוס איברים:\nx - 11 = 5\nשלב 3 - העברת אגפים:\nx = 5 + 11\nx = 16' }
        ]
    },
    questions: [
        {
            type: 'input',
            q: 'פתור את המשוואה:\n2x - 4 = 10\n(כתוב רק את המספר)',
            correct: '7',
            explanation: 'נעביר את ה-4 אגף:\n2x = 14\nנחלק ב-2 ונקבל x=7.'
        },
        {
            type: 'multiple',
            q: 'מה השלב הראשון בפתרון המשוואה?\n3(x - 2) = 9',
            options: ['לפתוח סוגריים', 'להעביר את 9 אגף', 'לחלק ב-3', 'לחסר 3'],
            correct: 'לחלק ב-3',
            explanation: 'ניתן לחלק את שני האגפים ב-3:\n(x - 2) = 3\nואז להעביר אגפים: x = 5'
        },
        {
            type: 'multiple',
            q: 'פתור:\n5x = 2x + 15',
            options: ['5', '3', '15', '-5'],
            correct: '5',
            explanation: 'נעביר את 2x אגף בחיסור:\n3x = 15\nנחלק ב-3 ונקבל x=5.'
        },
        {
            type: 'multiple',
            q: 'מה התוצאה של פתיחת הסוגריים?\n-2(x - 4)',
            options: ['-2x + 8', '-2x - 8', '-2x - 4', '2x + 8'],
            correct: '-2x + 8',
            explanation: 'מינוס כפול מינוס נותן פלוס!\n-2 × (-4) = +8'
        },
        {
            type: 'input',
            q: 'פתור:\nx + 5 = -2',
            correct: '-7',
            explanation: 'נעביר את ה-5 אגף (יהפוך למינוס):\nx = -2 - 5\nלכן:\nx = -7'
        },
        {
            type: 'multiple',
            q: 'איזו משוואה מתאימה למשפט: "מספר כפול 3 ועוד 2 שווה ל-17"?',
            options: ['3x + 2 = 17', '3(x + 2) = 17', 'x + 3 + 2 = 17', '2x + 3 = 17'],
            correct: '3x + 2 = 17',
            explanation: 'מספר (x) כפול 3 (3x) ועוד 2 (+2) שווה ל-17.'
        },
        {
            type: 'input',
            q: 'פתור:\n4(x - 2) - 3(x + 1) = 5\n(כתוב רק את המספר)',
            correct: '16',
            explanation: 'פותחים סוגריים:\n4x - 8 - 3x - 3 = 5\nכונסים:\nx - 11 = 5\nמעבירים אגפים:\nx = 16'
        },
        {
            type: 'multiple',
            q: 'מה התוצאה של פתיחת הסוגריים?\n4(x - 2)',
            options: ['4x - 8', '4x - 2', '4x + 8', 'x - 8'],
            correct: '4x - 8',
            explanation: 'מכפילים את 4 בכל מה שבסוגריים:\n4 × x = 4x\n4 × (-2) = -8'
        },
        {
            type: 'multiple',
            q: 'מה התוצאה של פתיחת הסוגריים?\n-3(x + 1)',
            options: ['-3x - 3', '-3x + 3', '3x - 3', '-3x + 1'],
            correct: '-3x - 3',
            explanation: 'המינוס משפיע על כל הסימנים!\n-3 × x = -3x\n-3 × (+1) = -3'
        },
        {
            type: 'input',
            q: 'פתור:\n2(x + 3) = 14',
            correct: '4',
            explanation: 'פותחים סוגריים:\n2x + 6 = 14\nמעבירים אגפים:\n2x = 8\nמחלקים:\nx = 4'
        },
        {
            type: 'multiple',
            q: 'פתור:\n3x - 5 = 2x + 7',
            options: ['12', '2', '-12', '5'],
            correct: '12',
            explanation: 'מעבירים את 2x אגף:\nx - 5 = 7\nמעבירים את 5- אגף:\nx = 12'
        },
        {
            type: 'input',
            q: 'פתור:\n5(x - 1) - 2(x + 3) = 4',
            correct: '5',
            explanation: 'פותחים:\n5x - 5 - 2x - 6 = 4\nכונסים:\n3x - 11 = 4\nמעבירים:\n3x = 15\nx = 5'
        },
        {
            type: 'multiple',
            q: 'מה השלב הראשון בפתרון?\n2(x - 5) + 3(x + 1) = 10',
            options: ['לפתוח סוגריים', 'להעביר את 10 אגף', 'לחלק ב-x', 'לכונס איברים'],
            correct: 'לפתוח סוגריים',
            explanation: 'תמיד מתחילים בפתיחת סוגריים לפני כל פעולה אחרת.'
        }
    ]
});
