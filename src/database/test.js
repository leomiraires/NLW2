const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: 'Leomir Aires',
        avatar: 'https://avatars1.githubusercontent.com/u/62808822?s=460&u=f49c9f9631ec7fcc58f7f109702c15f29bcc33a1&v=4',
        whatsapp: '84998500843',
        bio: 'O melhor professor de química do Brasil.',
    }

    classValue = {
        subject: 1,
        cost: '50',
        // o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        // o class_id virá pelo banco de dados após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    // Consultar os dados

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8hrs até as 18hrs
    //o horário do time_from (8hrs) precisa ser menor ou igual ao horário solicitado
    //o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    //console.log(selectClassesSchedules)
})