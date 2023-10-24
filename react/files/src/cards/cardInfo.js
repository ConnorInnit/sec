//holds the information on each injection technique and it's associated 
//fetch route. Extra information can be added and the program will 
//dynamically handle the new method

export const cardInfo = () => {
    return [
        {
            description: "UNION Tricks The Database By Joining The Unwanted SQL Statement With The Intended SQL Statement ' UNION injected_sql_statement'",
            title: 'Union Attacks',
            fetchSafeRoute: '',
            fetchUnsafeRoute: '',
        },
        {
            description: "By Using OR And 1=1, The Attacker Can Create A Second Condition, Which Will Always Return True.",
            title: '1=1 Attacks',
            fetchSafeRoute: '',
            fetchUnsafeRoute: ''
        },
        {
            description: "Forces An Error, Sometimes A Type Error And Uses This To Somehow Show Sensitive Data.",
            title: 'Error Attacks',
            fetchSafeRoute: '',
            fetchUnsafeRoute: ''
            
        }
    ]
}