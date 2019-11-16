const STOPS = [
    {
        stopNumber: 1323,
        addressLabel: 'Victoria St outside Spark',
        services: [
            {
                code: '22A',
                estimatedTimeTillArrival: 3,
                endStopSuburb: 'New Lynn',
                reported: true,
            },
            {
                code: '22N',
                estimatedTimeTillArrival: 6,
                endStopSuburb: 'New Lynn',
            },
            {
                code: '22R',
                estimatedTimeTillArrival: 10,
                endStopSuburb: 'Rosebank Rd',
                reported: true,
            },
            {
                code: '221X',
                estimatedTimeTillArrival: 12,
                endStopSuburb: 'Westmere',
            },
            {
                code: '223X',
                estimatedTimeTillArrival: 24,
                endStopSuburb: 'New Lynn',
            },
        ],
        nextService: {
            estimatedTimeTillArrival: 3, // in Minutes
        }
    },
    {
        stopNumber: 7014,
        addressLabel: '156 Victoria St West',
        services: [
            {
                code: '106',
                estimatedTimeTillArrival: 10,
                endStopSuburb: 'New Lynn',
                reported: false,
            },
            {
                code: 'INN',
                estimatedTimeTillArrival: 12,
                endStopSuburb: 'Downtown',
                reported: false,
            }
        ],
        nextService: {
            estimatedTimeTillArrival: 10, // in Minutes
        }
    },
    {
        stopNumber: 5053,
        addressLabel: '176 Victoria St West',
        services: [
            {
                code: '24B',
                estimatedTimeTillArrival: 14,
                endStopSuburb: 'New Lynn',
                reported: false,
            },
            {
                code: '24R',
                estimatedTimeTillArrival: 16,
                endStopSuburb: 'Remurua',
                reported: false,
            },
            {
                code: '24W',
                estimatedTimeTillArrival: 24,
                endStopSuburb: 'New Market',
                reported: false,
            },
            {
                code: '243X',
                estimatedTimeTillArrival: 40,
                endStopSuburb: 'Westmere',
                reported: false,
            },
            {
                code: '248X',
                estimatedTimeTillArrival: 50,
                endStopSuburb: 'Ponsonby',
                reported: false,
            },
        ],
        nextService: {
            estimatedTimeTillArrival: 14, // in Minutes
        }
    },
    {
        stopNumber: 7105,
        addressLabel: '201 Victoria St West',
        services: [
            {
                code: '75',
                estimatedTimeTillArrival: 20,
                endStopSuburb: 'Britomart',
                reported: false,
            },
            {
                code: 'INN',
                estimatedTimeTillArrival: 24,
                endStopSuburb: 'New Market',
                reported: false,
            },
        
        ],
        nextService: {
            estimatedTimeTillArrival: 20, // in Minutes
        }
    },
    {
        stopNumber: 1079,
        addressLabel: '137 Wellesey St',
        services: [
            {
                code: '82',
                estimatedTimeTillArrival: 22,
                endStopSuburb: 'Northshore',
                reported: false,
            },
            {
                code: '101',
                estimatedTimeTillArrival: 25,
                endStopSuburb: 'Britomart',
                reported: false,
            },
            {
                code: '802',
                estimatedTimeTillArrival: 26,
                endStopSuburb: 'Takapuna',
                reported: false,
            },
            {
                code: '923',
                estimatedTimeTillArrival: 34,
                endStopSuburb: 'Mount Albert',
                reported: false,
            },
            {
                code: '924',
                estimatedTimeTillArrival: 42,
                endStopSuburb: 'Western Springs',
                reported: false,
            },
            {
                code: 'NX2',
                estimatedTimeTillArrival: 50,
                endStopSuburb: 'North Shore',
                reported: false,
            },
        ],
        nextService: {
            estimatedTimeTillArrival: 22, // in Minutes
        }
    },
    {
        stopNumber: 5090,
        addressLabel: 'Opp 103 Wellesley St',
        services: [
            {
                code: '82',
                estimatedTimeTillArrival: 38,
                endStopSuburb: 'Takapuna',
                reported: false,
            },
            {
                code: '101',
                estimatedTimeTillArrival: 50,
                endStopSuburb: 'Britomart',
                reported: false,
            },
            {
                code: '802',
                estimatedTimeTillArrival: 63,
                endStopSuburb: 'Takapuna',
                reported: false,
            },
            {
                code: '923',
                estimatedTimeTillArrival: 70,
                endStopSuburb: 'Remurua',
                reported: false,
            },
            {
                code: '924',
                estimatedTimeTillArrival: 80,
                endStopSuburb: 'New Market',
                reported: false,
            },
            {
                code: 'NX2',
                estimatedTimeTillArrival: 82,
                endStopSuburb: 'North Shore',
                reported: false,
            },
        ],
        nextService: {
            estimatedTimeTillArrival: 38, // in Minutes
        }
    },
]
export default STOPS;