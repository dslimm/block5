const levelsArr = [
    {
        id: "0",
        value: "5, 10",
        target: "50",
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "1",
        value: "2, 3, 5",
        target: "100",
        createFixCub: [
            {
                fixCubCard: "27",
                fixCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "2",
        value: "1, 4, 5, 10, ✘",
        target: "200",
        startTimerGame: "0",
        getRandomValue: "1",
        gameProcess: "1",
        calculateScore: "0",
    },
    {
        id: "3",
        value: "2, 3, 5, 10",
        target: "200",
        startTimerGame: "0",
        getRandomValue: "7",
        gameProcess: "1",
        calculateScore: "1",
    },
    {
        id: "4",
        value: "1, 2, 5, 10",
        target: "300",
        startTimerGame: "0",
        getRandomValue: "4",
        gameProcess: "4",
        gameProcessSwap: "10",
        calculateScore: "0",
    },
    {
        id: "5",
        value: "3, 4, 5, 10",
        target: "300",
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "10",
        calculateScore: "0",
    },
    {
        id: "6",
        value: "2, 3, 10",
        target: "400",
        createFixCub: [
            {
                fixCubCard: "28",
                fixCubValue: "20",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "7",
        value: "2, 4, 5, 10, ⇆ ",
        target: "400",
        startTimerGame: "0",
        getRandomValue: "2",
        gameProcess: "2",
        calculateScore: "0",
    },
    {
        id: "8",
        value: "1, 4, 10",
        target: "500",
        createSingleCub: [
            {
                singleCubCard: "28",
                singleCubValue: "50",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "9",
        value: "0, 2, 3, 4, 5, 10",
        target: "500",
        startTimerGame: "0",
        getRandomValue: "6",
        gameProcess: "0",
        calculateScore: "2",
    },
    {
        id: "10",
        value: "2, 4, 6, 10, ⤋",
        target: "500",
        startTimerGame: "0",
        getRandomValue: "3",
        gameProcess: "3",
        calculateScore: "0",
    },
    {
        id: "11",
        value: "4, 5, 6",
        target: "200",
        createFixCub: [
            {
                fixCubCard: "8",
                fixCubValue: "",
            },
            {
                fixCubCard: "48",
                fixCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "12",
        value: "4, 5, 6, 10, ✘",
        target: "300",
        startTimerGame: "0",
        getRandomValue: "1",
        gameProcess: "1",
        calculateScore: "0",
    },
    {
        id: "13",
        value: "3, 5, 7, 10",
        target: "300",
        createSingleCub: [
            {
                singleCubCard: "16",
                singleCubValue: "",
            },
            {
                singleCubCard: "18",
                singleCubValue: "",
            },
            {
                singleCubCard: "36",
                singleCubValue: "",
            },
            {
                singleCubCard: "38",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "7",
        gameProcess: "1",
        calculateScore: "1",
    },
    {
        id: "14",
        value: "3, 5, 6, 10",
        target: "400",
        startTimerGame: "0",
        getRandomValue: "4",
        gameProcess: "4",
        gameProcessSwap: "15",
        calculateScore: "0",
    },
    {
        id: "15",
        value: "4, 5, 7, 10",
        target: "400",
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "15",
        calculateScore: "0",
    },
    {
        id: "16",
        value: "3, 7, 10",
        target: "500",
        createFixCub: [
            {
                fixCubCard: "7",
                fixCubValue: "25",
            },
            {
                fixCubCard: "47",
                fixCubValue: "25",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "17",
        value: "5, 6, 7, 10, ⇆ ",
        target: "500",
        startTimerGame: "0",
        getRandomValue: "2",
        gameProcess: "2",
        calculateScore: "0",
    },
    {
        id: "18",
        value: "4, 6, 10",
        target: "600",
        createSingleCub: [
            {
                singleCubCard: "7",
                singleCubValue: "30",
            },
            {
                singleCubCard: "48",
                singleCubValue: "30",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "19",
        value: "0, 3, 5, 6, 10",
        target: "600",
        startTimerGame: "0",
        getRandomValue: "6",
        gameProcess: "0",
        calculateScore: "2",
    },
    {
        id: "20",
        value: "4, 5, 6, 7, 10, ⤋",
        target: "700",
        createSingleCub: [
            {
                singleCubCard: "17",
                singleCubValue: "25",
            },
            {
                singleCubCard: "27",
                singleCubValue: "15",
            },
            {
                singleCubCard: "37",
                singleCubValue: "25",
            },
            {
                singleCubCard: "19",
                singleCubValue: "25",
            },
            {
                singleCubCard: "29",
                singleCubValue: "15",
            },
            {
                singleCubCard: "39",
                singleCubValue: "25",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "3",
        gameProcess: "3",
        calculateScore: "0",
    },
    {
        id: "21",
        value: "5, 7, 8",
        target: "300",
        createFixCub: [
            {
                fixCubCard: "7",
                fixCubValue: "",
            },
            {
                fixCubCard: "27",
                fixCubValue: "",
            },
            {
                fixCubCard: "47",
                fixCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "22",
        value: "5, 6, 9, 10, ✘",
        target: "400",
        createFixCub: [
            {
                fixCubCard: "5",
                fixCubValue: "25",
            },
            {
                fixCubCard: "16",
                fixCubValue: "20",
            },
            {
                fixCubCard: "27",
                fixCubValue: "15",
            },
            {
                fixCubCard: "38",
                fixCubValue: "10",
            },
            {
                fixCubCard: "49",
                fixCubValue: "5",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "1",
        gameProcess: "1",
        calculateScore: "0",
    },
    {
        id: "23",
        value: "5, 7, 8, 10",
        target: "400",
        startTimerGame: "0",
        getRandomValue: "7",
        gameProcess: "1",
        calculateScore: "1",
    },
    {
        id: "24",
        value: "5, 6, 7, 10",
        target: "500",
        createSingleCub: [
            {
                singleCubCard: "9",
                singleCubValue: "",
            },
            {
                singleCubCard: "18",
                singleCubValue: "",
            },
            {
                singleCubCard: "27",
                singleCubValue: "",
            },
            {
                singleCubCard: "38",
                singleCubValue: "",
            },
            {
                singleCubCard: "49",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "4",
        gameProcess: "4",
        gameProcessSwap: "15",
        calculateScore: "0",
    },
    {
        id: "25",
        value: "5, 7, 9, 10",
        target: "500",
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "20",
        calculateScore: "0",
    },
    {
        id: "26",
        value: "7, 8, 10",
        target: "600",
        createFixCub: [
            {
                fixCubCard: "6",
                fixCubValue: "20",
            },
            {
                fixCubCard: "27",
                fixCubValue: "20",
            },
            {
                fixCubCard: "48",
                fixCubValue: "20",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "7",
                singleCubValue: "15",
            },
            {
                singleCubCard: "28",
                singleCubValue: "15",
            },
            {
                singleCubCard: "49",
                singleCubValue: "15",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "27",
        value: "5, 8, 9, 10, ⇆ ",
        target: "700",
        startTimerGame: "0",
        getRandomValue: "2",
        gameProcess: "2",
        calculateScore: "0",
    },
    {
        id: "28",
        value: "6, 9, 10",
        target: "800",
        createSingleCub: [
            {
                singleCubCard: "8",
                singleCubValue: "20",
            },
            {
                singleCubCard: "48",
                singleCubValue: "20",
            },
            {
                singleCubCard: "16",
                singleCubValue: "20",
            },
            {
                singleCubCard: "36",
                singleCubValue: "20",
            },
        ],
        createFixCub: [
            {
                fixCubCard: "27",
                fixCubValue: "30",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "29",
        value: "0, 5, 7, 8, 10",
        target: "900",
        createSingleCub: [
            {
                singleCubCard: "5",
                singleCubValue: "5",
            },
            {
                singleCubCard: "25",
                singleCubValue: "5",
            },
            {
                singleCubCard: "45",
                singleCubValue: "5",
            },
            {
                singleCubCard: "16",
                singleCubValue: "5",
            },
            {
                singleCubCard: "36",
                singleCubValue: "5",
            },
            {
                singleCubCard: "7",
                singleCubValue: "5",
            },
            {
                singleCubCard: "27",
                singleCubValue: "5",
            },
            {
                singleCubCard: "47",
                singleCubValue: "5",
            },
            {
                singleCubCard: "18",
                singleCubValue: "5",
            },
            {
                singleCubCard: "38",
                singleCubValue: "5",
            },
            {
                singleCubCard: "9",
                singleCubValue: "5",
            },
            {
                singleCubCard: "29",
                singleCubValue: "5",
            },
            {
                singleCubCard: "49",
                singleCubValue: "5",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "6",
        gameProcess: "0",
        calculateScore: "2",
    },
    {
        id: "30",
        value: "5, 7, 8, 9, 10, ⤋",
        target: "900",
        createFixCub: [
            {
                fixCubCard: "19",
                fixCubValue: "15",
            },
            {
                fixCubCard: "39",
                fixCubValue: "15",
            },
            {
                fixCubCard: "17",
                fixCubValue: "25",
            },
            {
                fixCubCard: "37",
                fixCubValue: "25",
            },
            {
                fixCubCard: "15",
                fixCubValue: "35",
            },
            {
                fixCubCard: "35",
                fixCubValue: "35",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "3",
        gameProcess: "3",
        calculateScore: "0",
    },
    {
        id: "31",
        value: "5, 8, 10, 11",
        target: "400",
        createFixCub: [
            {
                fixCubCard: "8",
                fixCubValue: "",
            },
            {
                fixCubCard: "17",
                fixCubValue: "",
            },
            {
                fixCubCard: "37",
                fixCubValue: "",
            },
            {
                fixCubCard: "48",
                fixCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "10",
        calculateScore: "0",
    },
    {
        id: "32",
        value: "5, 10, 12, 13, ✘",
        target: "500",
        startTimerGame: "0",
        getRandomValue: "1",
        gameProcess: "1",
        calculateScore: "0",
    },
    {
        id: "33",
        value: "5, 10, 11, 14",
        target: "500",
        createSingleCub: [
            {
                singleCubCard: "6",
                singleCubValue: "",
            },
            {
                singleCubCard: "16",
                singleCubValue: "",
            },
            {
                singleCubCard: "37",
                singleCubValue: "",
            },
            {
                singleCubCard: "47",
                singleCubValue: "",
            },
            {
                singleCubCard: "8",
                singleCubValue: "",
            },
            {
                singleCubCard: "18",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "7",
        gameProcess: "1",
        calculateScore: "1",
    },
    {
        id: "34",
        value: "5, 9, 10, 13",
        target: "600",
        startTimerGame: "0",
        getRandomValue: "4",
        gameProcess: "4",
        gameProcessSwap: "20",
        calculateScore: "0",
    },
    {
        id: "35",
        value: "5, 10, 11, 12",
        target: "600",
        createFixCub: [
            {
                fixCubCard: "25",
                fixCubValue: "25",
            },
            {
                fixCubCard: "26",
                fixCubValue: "20",
            },
            {
                fixCubCard: "27",
                fixCubValue: "15",
            },
            {
                fixCubCard: "28",
                fixCubValue: "10",
            },
            {
                fixCubCard: "29",
                fixCubValue: "5",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "15",
        calculateScore: "0",
    },
    {
        id: "36",
        value: "9, 10, 11",
        target: "700",
        createFixCub: [
            {
                fixCubCard: "29",
                fixCubValue: "25",
            },
            {
                fixCubCard: "8",
                fixCubValue: "25",
            },
            {
                fixCubCard: "48",
                fixCubValue: "25",
            },
            {
                fixCubCard: "27",
                fixCubValue: "25",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "37",
        value: "10, 12, 14, 15, ⇆ ",
        target: "800",
        createSingleCub: [
            {
                singleCubCard: "15",
                singleCubValue: "15",
            },
            {
                singleCubCard: "17",
                singleCubValue: "10",
            },
            {
                singleCubCard: "19",
                singleCubValue: "15",
            },
            {
                singleCubCard: "35",
                singleCubValue: "15",
            },
            {
                singleCubCard: "37",
                singleCubValue: "10",
            },
            {
                singleCubCard: "39",
                singleCubValue: "15",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "2",
        gameProcess: "2",
        calculateScore: "0",
    },
    {
        id: "38",
        value: "10, 11, 14",
        target: "900",
        createSingleCub: [
            {
                singleCubCard: "29",
                singleCubValue: "30",
            },
            {
                singleCubCard: "26",
                singleCubValue: "30",
            },
            {
                singleCubCard: "18",
                singleCubValue: "30",
            },
            {
                singleCubCard: "38",
                singleCubValue: "30",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "39",
        value: "0, 9, 11, 13, 15",
        target: "1000",
        createSingleCub: [
            {
                singleCubCard: "28",
                singleCubValue: "5",
            },
            {
                singleCubCard: "38",
                singleCubValue: "5",
            },
            {
                singleCubCard: "48",
                singleCubValue: "5",
            },
            {
                singleCubCard: "26",
                singleCubValue: "5",
            },
            {
                singleCubCard: "16",
                singleCubValue: "5",
            },
            {
                singleCubCard: "6",
                singleCubValue: "5",
            },
            {
                singleCubCard: "24",
                singleCubValue: "5",
            },
            {
                singleCubCard: "34",
                singleCubValue: "5",
            },
            {
                singleCubCard: "44",
                singleCubValue: "5",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "6",
        gameProcess: "0",
        calculateScore: "2",
    },
    {
        id: "40",
        value: "10, 12, 13, 14, 15, ⤋",
        target: "1000",
        createFixCub: [
            {
                fixCubCard: "19",
                fixCubValue: "10",
            },
            {
                fixCubCard: "39",
                fixCubValue: "10",
            },
            {
                fixCubCard: "17",
                fixCubValue: "20",
            },
            {
                fixCubCard: "37",
                fixCubValue: "20",
            },
            {
                fixCubCard: "15",
                fixCubValue: "30",
            },
            {
                fixCubCard: "35",
                fixCubValue: "30",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "9",
                singleCubValue: "",
            },
            {
                singleCubCard: "29",
                singleCubValue: "",
            },
            {
                singleCubCard: "49",
                singleCubValue: "",
            },
            {
                singleCubCard: "8",
                singleCubValue: "15",
            },
            {
                singleCubCard: "18",
                singleCubValue: "",
            },
            {
                singleCubCard: "28",
                singleCubValue: "15",
            },
            {
                singleCubCard: "38",
                singleCubValue: "",
            },
            {
                singleCubCard: "48",
                singleCubValue: "15",
            },
            {
                singleCubCard: "7",
                singleCubValue: "",
            },
            {
                singleCubCard: "27",
                singleCubValue: "",
            },
            {
                singleCubCard: "47",
                singleCubValue: "",
            },
            {
                singleCubCard: "6",
                singleCubValue: "25",
            },
            {
                singleCubCard: "16",
                singleCubValue: "",
            },
            {
                singleCubCard: "26",
                singleCubValue: "25",
            },
            {
                singleCubCard: "36",
                singleCubValue: "",
            },
            {
                singleCubCard: "46",
                singleCubValue: "25",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "3",
        gameProcess: "3",
        calculateScore: "0",
    },
    {
        id: "41",
        value: "5, 9, 10, 11",
        target: "500",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "",
            },
            {
                fixCubCard: "18",
                fixCubValue: "",
            },
            {
                fixCubCard: "27",
                fixCubValue: "",
            },
            {
                fixCubCard: "36",
                fixCubValue: "",
            },
            {
                fixCubCard: "45",
                fixCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "15",
        calculateScore: "0",
    },
    {
        id: "42",
        value: "8, 10, 12, 15, ✘",
        target: "600",
        createSingleCub: [
            {
                singleCubCard: "17",
                singleCubValue: "20",
            },
            {
                singleCubCard: "37",
                singleCubValue: "20",
            },
            {
                singleCubCard: "8",
                singleCubValue: "15",
            },
            {
                singleCubCard: "28",
                singleCubValue: "15",
            },
            {
                singleCubCard: "48",
                singleCubValue: "15",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "1",
        gameProcess: "1",
        calculateScore: "0",
    },
    {
        id: "43",
        value: "10, 11, 14, 15",
        target: "700",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "5",
            },
            {
                fixCubCard: "48",
                fixCubValue: "10",
            },
            {
                fixCubCard: "7",
                fixCubValue: "15",
            },
            {
                fixCubCard: "46",
                fixCubValue: "20",
            },
            {
                fixCubCard: "5",
                fixCubValue: "25",
            },
            {
                fixCubCard: "44",
                fixCubValue: "30",
            },
            {
                fixCubCard: "3",
                fixCubValue: "35",
            },
            {
                fixCubCard: "42",
                fixCubValue: "40",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "7",
        gameProcess: "1",
        calculateScore: "1",
    },
    {
        id: "44",
        value: "5, 10, 12, 14",
        target: "800",
        createSingleCub: [
            {
                singleCubCard: "6",
                singleCubValue: "",
            },
            {
                singleCubCard: "26",
                singleCubValue: "",
            },
            {
                singleCubCard: "46",
                singleCubValue: "",
            },
            {
                singleCubCard: "17",
                singleCubValue: "",
            },
            {
                singleCubCard: "37",
                singleCubValue: "",
            },
            {
                singleCubCard: "8",
                singleCubValue: "",
            },
            {
                singleCubCard: "28",
                singleCubValue: "",
            },
            {
                singleCubCard: "48",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "4",
        gameProcess: "4",
        gameProcessSwap: "20",
        calculateScore: "0",
    },
    {
        id: "45",
        value: "5, 10, 13, 16",
        target: "900",
        createFixCub: [
            {
                fixCubCard: "7",
                fixCubValue: "1",
            },
            {
                fixCubCard: "17",
                fixCubValue: "2",
            },
            {
                fixCubCard: "27",
                fixCubValue: "3",
            },
            {
                fixCubCard: "37",
                fixCubValue: "4",
            },
            {
                fixCubCard: "47",
                fixCubValue: "5",
            },
            {
                fixCubCard: "8",
                fixCubValue: "6",
            },
            {
                fixCubCard: "18",
                fixCubValue: "7",
            },
            {
                fixCubCard: "28",
                fixCubValue: "8",
            },
            {
                fixCubCard: "38",
                fixCubValue: "9",
            },
            {
                fixCubCard: "48",
                fixCubValue: "10",
            },
            {
                fixCubCard: "9",
                fixCubValue: "11",
            },
            {
                fixCubCard: "19",
                fixCubValue: "12",
            },
            {
                fixCubCard: "29",
                fixCubValue: "13",
            },
            {
                fixCubCard: "39",
                fixCubValue: "14",
            },
            {
                fixCubCard: "49",
                fixCubValue: "15",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "20",
        calculateScore: "0",
    },
    {
        id: "46",
        value: "14, 15, 16",
        target: "1000",
        createFixCub: [
            {
                fixCubCard: "14",
                fixCubValue: "30",
            },
            {
                fixCubCard: "34",
                fixCubValue: "30",
            },
            {
                fixCubCard: "18",
                fixCubValue: "25",
            },
            {
                fixCubCard: "38",
                fixCubValue: "25",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "9",
                singleCubValue: "",
            },
            {
                singleCubCard: "49",
                singleCubValue: "",
            },
            {
                singleCubCard: "6",
                singleCubValue: "",
            },
            {
                singleCubCard: "26",
                singleCubValue: "",
            },
            {
                singleCubCard: "46",
                singleCubValue: "",
            },
            {
                singleCubCard: "3",
                singleCubValue: "",
            },
            {
                singleCubCard: "43",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "47",
        value: "10, 11, 13, 15, ⇆ ",
        target: "1100",
        createSingleCub: [
            {
                singleCubCard: "15",
                singleCubValue: "25",
            },
            {
                singleCubCard: "16",
                singleCubValue: "20",
            },
            {
                singleCubCard: "17",
                singleCubValue: "15",
            },
            {
                singleCubCard: "18",
                singleCubValue: "10",
            },
            {
                singleCubCard: "19",
                singleCubValue: "5",
            },
            {
                singleCubCard: "35",
                singleCubValue: "25",
            },
            {
                singleCubCard: "36",
                singleCubValue: "20",
            },
            {
                singleCubCard: "37",
                singleCubValue: "15",
            },
            {
                singleCubCard: "38",
                singleCubValue: "10",
            },
            {
                singleCubCard: "39",
                singleCubValue: "5",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "2",
        gameProcess: "2",
        calculateScore: "0",
    },
    {
        id: "48",
        value: "10, 11, 14",
        target: "1300",
        createSingleCub: [
            {
                singleCubCard: "8",
                singleCubValue: "25",
            },
            {
                singleCubCard: "28",
                singleCubValue: "25",
            },
            {
                singleCubCard: "48",
                singleCubValue: "25",
            },
            {
                singleCubCard: "17",
                singleCubValue: "20",
            },
            {
                singleCubCard: "37",
                singleCubValue: "20",
            },
            {
                singleCubCard: "6",
                singleCubValue: "15",
            },
            {
                singleCubCard: "26",
                singleCubValue: "15",
            },
            {
                singleCubCard: "46",
                singleCubValue: "15",
            },
            {
                singleCubCard: "15",
                singleCubValue: "10",
            },
            {
                singleCubCard: "35",
                singleCubValue: "10",
            },
            {
                singleCubCard: "24",
                singleCubValue: "5",
            },
        ],
        createFixCub: [
            {
                fixCubCard: "19",
                fixCubValue: "30",
            },
            {
                fixCubCard: "39",
                fixCubValue: "30",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "49",
        value: "0, 11, 12, 13, 14",
        target: "1400",
        createSingleCub: [
            {
                singleCubCard: "18",
                singleCubValue: "10",
            },
            {
                singleCubCard: "28",
                singleCubValue: "10",
            },
            {
                singleCubCard: "38",
                singleCubValue: "10",
            },
            {
                singleCubCard: "46",
                singleCubValue: "10",
            },
            {
                singleCubCard: "36",
                singleCubValue: "10",
            },
            {
                singleCubCard: "16",
                singleCubValue: "10",
            },
            {
                singleCubCard: "6",
                singleCubValue: "10",
            },
            {
                singleCubCard: "14",
                singleCubValue: "10",
            },
            {
                singleCubCard: "24",
                singleCubValue: "10",
            },
            {
                singleCubCard: "34",
                singleCubValue: "10",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "6",
        gameProcess: "0",
        calculateScore: "2",
    },
    {
        id: "50",
        value: "10, 14, 15, 16, ⤋",
        target: "1500",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "15",
            },
            {
                fixCubCard: "29",
                fixCubValue: "15",
            },
            {
                fixCubCard: "49",
                fixCubValue: "15",
            },
            {
                fixCubCard: "7",
                fixCubValue: "25",
            },
            {
                fixCubCard: "27",
                fixCubValue: "25",
            },
            {
                fixCubCard: "47",
                fixCubValue: "25",
            },
            {
                fixCubCard: "5",
                fixCubValue: "35",
            },
            {
                fixCubCard: "25",
                fixCubValue: "35",
            },
            {
                fixCubCard: "45",
                fixCubValue: "35",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "8",
                singleCubValue: "5",
            },
            {
                singleCubCard: "28",
                singleCubValue: "5",
            },
            {
                singleCubCard: "48",
                singleCubValue: "5",
            },
            {
                singleCubCard: "6",
                singleCubValue: "5",
            },
            {
                singleCubCard: "26",
                singleCubValue: "5",
            },
            {
                singleCubCard: "46",
                singleCubValue: "5",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "3",
        gameProcess: "3",
        calculateScore: "0",
    },
    {
        id: "51",
        value: "11, 44, 55",
        target: "1000",
        createFixCub: [
            {
                fixCubCard: "16",
                fixCubValue: "",
            },
            {
                fixCubCard: "18",
                fixCubValue: "",
            },
            {
                fixCubCard: "27",
                fixCubValue: "",
            },
            {
                fixCubCard: "36",
                fixCubValue: "",
            },
            {
                fixCubCard: "38",
                fixCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "52",
        value: "5, 22, 33, 50, ✘",
        target: "1100",
        createSingleCub: [
            {
                singleCubCard: "6",
                singleCubValue: "30",
            },
            {
                singleCubCard: "7",
                singleCubValue: "20",
            },
            {
                singleCubCard: "27",
                singleCubValue: "20",
            },
            {
                singleCubCard: "28",
                singleCubValue: "10",
            },
            {
                singleCubCard: "46",
                singleCubValue: "30",
            },
            {
                singleCubCard: "47",
                singleCubValue: "20",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "1",
        gameProcess: "1",
        calculateScore: "0",
    },
    {
        id: "53",
        value: "10, 11, 44, 55",
        target: "1200",
        createFixCub: [
            {
                fixCubCard: "19",
                fixCubValue: "50",
            },
            {
                fixCubCard: "38",
                fixCubValue: "30",
            },
            {
                fixCubCard: "17",
                fixCubValue: "40",
            },
            {
                fixCubCard: "36",
                fixCubValue: "40",
            },
            {
                fixCubCard: "15",
                fixCubValue: "30",
            },
            {
                fixCubCard: "34",
                fixCubValue: "50",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "7",
        gameProcess: "1",
        calculateScore: "1",
    },
    {
        id: "54",
        value: "5, 11, 22, 50",
        target: "1300",
        createSingleCub: [
            {
                singleCubCard: "16",
                singleCubValue: "",
            },
            {
                singleCubCard: "26",
                singleCubValue: "",
            },
            {
                singleCubCard: "36",
                singleCubValue: "",
            },
            {
                singleCubCard: "17",
                singleCubValue: "",
            },
            {
                singleCubCard: "27",
                singleCubValue: "",
            },
            {
                singleCubCard: "37",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "4",
        gameProcess: "4",
        gameProcessSwap: "25",
        calculateScore: "0",
    },
    {
        id: "55",
        value: "5, 33, 44, 55",
        target: "1400",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "11",
            },
            {
                fixCubCard: "18",
                fixCubValue: "22",
            },
            {
                fixCubCard: "29",
                fixCubValue: "33",
            },
            {
                fixCubCard: "38",
                fixCubValue: "44",
            },
            {
                fixCubCard: "49",
                fixCubValue: "55",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "25",
        calculateScore: "0",
    },
    {
        id: "56",
        value: "22, 33, 40",
        target: "1500",
        createFixCub: [
            {
                fixCubCard: "17",
                fixCubValue: "35",
            },
            {
                fixCubCard: "37",
                fixCubValue: "35",
            },
            {
                fixCubCard: "19",
                fixCubValue: "25",
            },
            {
                fixCubCard: "39",
                fixCubValue: "25",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "7",
                singleCubValue: "",
            },
            {
                singleCubCard: "27",
                singleCubValue: "",
            },
            {
                singleCubCard: "29",
                singleCubValue: "",
            },
            {
                singleCubCard: "49",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "57",
        value: "11, 25, 44, 55, ⇆ ",
        target: "1600",
        createSingleCub: [
            {
                singleCubCard: "19",
                singleCubValue: "20",
            },
            {
                singleCubCard: "17",
                singleCubValue: "30",
            },
            {
                singleCubCard: "15",
                singleCubValue: "40",
            },
            {
                singleCubCard: "39",
                singleCubValue: "20",
            },
            {
                singleCubCard: "37",
                singleCubValue: "30",
            },
            {
                singleCubCard: "35",
                singleCubValue: "40",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "2",
        gameProcess: "2",
        calculateScore: "0",
    },
    {
        id: "58",
        value: "5, 22, 33, 55",
        target: "1700",
        createSingleCub: [
            {
                singleCubCard: "28",
                singleCubValue: "45",
            },
            {
                singleCubCard: "26",
                singleCubValue: "45",
            },
            {
                singleCubCard: "17",
                singleCubValue: "45",
            },
            {
                singleCubCard: "37",
                singleCubValue: "45",
            },
        ],
        createFixCub: [
            {
                fixCubCard: "27",
                fixCubValue: "50",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "59",
        value: "0, 11, 22, 33, 44, 55",
        target: "1800",
        createSingleCub: [
            {
                singleCubCard: "18",
                singleCubValue: "30",
            },
            {
                singleCubCard: "28",
                singleCubValue: "40",
            },
            {
                singleCubCard: "38",
                singleCubValue: "30",
            },
            {
                singleCubCard: "17",
                singleCubValue: "40",
            },
            {
                singleCubCard: "27",
                singleCubValue: "50",
            },
            {
                singleCubCard: "37",
                singleCubValue: "40",
            },
            {
                singleCubCard: "16",
                singleCubValue: "30",
            },
            {
                singleCubCard: "26",
                singleCubValue: "40",
            },
            {
                singleCubCard: "36",
                singleCubValue: "30",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "6",
        gameProcess: "0",
        calculateScore: "2",
    },
    {
        id: "60",
        value: "10, 22, 33, 44, 55, ⤋",
        target: "1900",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "50",
            },
            {
                fixCubCard: "18",
                fixCubValue: "50",
            },
            {
                fixCubCard: "27",
                fixCubValue: "50",
            },
            {
                fixCubCard: "38",
                fixCubValue: "50",
            },
            {
                fixCubCard: "49",
                fixCubValue: "50",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "8",
                singleCubValue: "40",
            },
            {
                singleCubCard: "28",
                singleCubValue: "40",
            },
            {
                singleCubCard: "48",
                singleCubValue: "40",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "3",
        gameProcess: "3",
        calculateScore: "0",
    },
    {
        id: "61",
        value: "44, 55, 66",
        target: "1200",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "",
            },
            {
                fixCubCard: "19",
                fixCubValue: "",
            },
            {
                fixCubCard: "29",
                fixCubValue: "",
            },
            {
                fixCubCard: "39",
                fixCubValue: "",
            },
            {
                fixCubCard: "47",
                fixCubValue: "",
            },
            {
                fixCubCard: "37",
                fixCubValue: "",
            },
            {
                fixCubCard: "27",
                fixCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "62",
        value: "11, 20, 30, 44, ✘",
        target: "1300",
        createSingleCub: [
            {
                singleCubCard: "19",
                singleCubValue: "30",
            },
            {
                singleCubCard: "29",
                singleCubValue: "30",
            },
            {
                singleCubCard: "39",
                singleCubValue: "30",
            },
            {
                singleCubCard: "49",
                singleCubValue: "30",
            },
            {
                singleCubCard: "48",
                singleCubValue: "40",
            },
            {
                singleCubCard: "38",
                singleCubValue: "40",
            },
            {
                singleCubCard: "28",
                singleCubValue: "40",
            },
            {
                singleCubCard: "47",
                singleCubValue: "50",
            },
            {
                singleCubCard: "37",
                singleCubValue: "50",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "1",
        gameProcess: "1",
        calculateScore: "0",
    },
    {
        id: "63",
        value: "22, 33, 40, 50",
        target: "1400",
        createFixCub: [
            {
                fixCubCard: "19",
                fixCubValue: "30",
            },
            {
                fixCubCard: "29",
                fixCubValue: "30",
            },
            {
                fixCubCard: "39",
                fixCubValue: "30",
            },
            {
                fixCubCard: "6",
                fixCubValue: "40",
            },
            {
                fixCubCard: "16",
                fixCubValue: "40",
            },
            {
                fixCubCard: "36",
                fixCubValue: "40",
            },
            {
                fixCubCard: "46",
                fixCubValue: "40",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "7",
        gameProcess: "1",
        calculateScore: "1",
    },
    {
        id: "64",
        value: "5, 44, 55, 66",
        target: "1500",
        createSingleCub: [
            {
                singleCubCard: "5",
                singleCubValue: "",
            },
            {
                singleCubCard: "25",
                singleCubValue: "",
            },
            {
                singleCubCard: "45",
                singleCubValue: "",
            },
            {
                singleCubCard: "17",
                singleCubValue: "",
            },
            {
                singleCubCard: "37",
                singleCubValue: "",
            },
            {
                singleCubCard: "29",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "4",
        gameProcess: "4",
        gameProcessSwap: "25",
        calculateScore: "0",
    },
    {
        id: "65",
        value: "5, 22, 33, 50",
        target: "1600",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "20",
            },
            {
                fixCubCard: "7",
                fixCubValue: "20",
            },
            {
                fixCubCard: "49",
                fixCubValue: "20",
            },
            {
                fixCubCard: "47",
                fixCubValue: "20",
            },
            {
                fixCubCard: "18",
                fixCubValue: "50",
            },
            {
                fixCubCard: "38",
                fixCubValue: "50",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "25",
        calculateScore: "0",
    },
    {
        id: "66",
        value: "20, 30, 44, 66",
        target: "1700",
        createFixCub: [
            {
                fixCubCard: "5",
                fixCubValue: "55",
            },
            {
                fixCubCard: "45",
                fixCubValue: "55",
            },
            {
                fixCubCard: "17",
                fixCubValue: "45",
            },
            {
                fixCubCard: "37",
                fixCubValue: "45",
            },
            {
                fixCubCard: "9",
                fixCubValue: "35",
            },
            {
                fixCubCard: "49",
                fixCubValue: "35",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "15",
                singleCubValue: "",
            },
            {
                singleCubCard: "35",
                singleCubValue: "",
            },
            {
                singleCubCard: "27",
                singleCubValue: "",
            },
            {
                singleCubCard: "19",
                singleCubValue: "",
            },
            {
                singleCubCard: "39",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "67",
        value: "11, 35, 55, 77, ⇆ ",
        target: "1800",
        createSingleCub: [
            {
                singleCubCard: "19",
                singleCubValue: "40",
            },
            {
                singleCubCard: "49",
                singleCubValue: "40",
            },
            {
                singleCubCard: "7",
                singleCubValue: "50",
            },
            {
                singleCubCard: "37",
                singleCubValue: "50",
            },
            {
                singleCubCard: "15",
                singleCubValue: "60",
            },
            {
                singleCubCard: "45",
                singleCubValue: "60",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "2",
        gameProcess: "2",
        calculateScore: "0",
    },
    {
        id: "68",
        value: "30, 44, 50, 66",
        target: "1900",
        createSingleCub: [
            {
                singleCubCard: "27",
                singleCubValue: "60",
            },
        ],
        createFixCub: [
            {
                fixCubCard: "7",
                fixCubValue: "40",
            },
            {
                fixCubCard: "25",
                fixCubValue: "40",
            },
            {
                fixCubCard: "29",
                fixCubValue: "40",
            },
            {
                fixCubCard: "47",
                fixCubValue: "40",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "69",
        value: "0, 22, 33, 55, 66, 77",
        target: "2000",
        createSingleCub: [
            {
                singleCubCard: "9",
                singleCubValue: "20",
            },
            {
                singleCubCard: "19",
                singleCubValue: "20",
            },
            {
                singleCubCard: "39",
                singleCubValue: "20",
            },
            {
                singleCubCard: "49",
                singleCubValue: "20",
            },
            {
                singleCubCard: "8",
                singleCubValue: "30",
            },
            {
                singleCubCard: "18",
                singleCubValue: "30",
            },
            {
                singleCubCard: "38",
                singleCubValue: "30",
            },
            {
                singleCubCard: "48",
                singleCubValue: "30",
            },
            {
                singleCubCard: "7",
                singleCubValue: "40",
            },
            {
                singleCubCard: "17",
                singleCubValue: "40",
            },
            {
                singleCubCard: "37",
                singleCubValue: "40",
            },
            {
                singleCubCard: "47",
                singleCubValue: "40",
            },
            {
                singleCubCard: "6",
                singleCubValue: "50",
            },
            {
                singleCubCard: "16",
                singleCubValue: "50",
            },
            {
                singleCubCard: "36",
                singleCubValue: "50",
            },
            {
                singleCubCard: "46",
                singleCubValue: "50",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "6",
        gameProcess: "0",
        calculateScore: "2",
    },
    {
        id: "70",
        value: "22, 30, 44, 50, 66, ⤋",
        target: "2000",
        createFixCub: [
            {
                fixCubCard: "8",
                fixCubValue: "10",
            },
            {
                fixCubCard: "18",
                fixCubValue: "20",
            },
            {
                fixCubCard: "28",
                fixCubValue: "30",
            },
            {
                fixCubCard: "38",
                fixCubValue: "40",
            },
            {
                fixCubCard: "48",
                fixCubValue: "50",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "9",
                singleCubValue: "50",
            },
            {
                singleCubCard: "19",
                singleCubValue: "40",
            },
            {
                singleCubCard: "29",
                singleCubValue: "30",
            },
            {
                singleCubCard: "39",
                singleCubValue: "20",
            },
            {
                singleCubCard: "49",
                singleCubValue: "10",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "3",
        gameProcess: "3",
        calculateScore: "0",
    },
    {
        id: "71",
        value: "55, 77, 88",
        target: "1500",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "",
            },
            {
                fixCubCard: "8",
                fixCubValue: "",
            },
            {
                fixCubCard: "7",
                fixCubValue: "",
            },
            {
                fixCubCard: "6",
                fixCubValue: "",
            },
            {
                fixCubCard: "49",
                fixCubValue: "",
            },
            {
                fixCubCard: "48",
                fixCubValue: "",
            },
            {
                fixCubCard: "47",
                fixCubValue: "",
            },
            {
                fixCubCard: "46",
                fixCubValue: "",
            },
            {
                fixCubCard: "15",
                fixCubValue: "",
            },
            {
                fixCubCard: "35",
                fixCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "0",
        gameProcess: "0",
        calculateScore: "0",
    },
    {
        id: "72",
        value: "30, 44, 50, 66, ✘",
        target: "1600",
        createSingleCub: [
            {
                singleCubCard: "9",
                singleCubValue: "25",
            },
            {
                singleCubCard: "19",
                singleCubValue: "25",
            },
            {
                singleCubCard: "29",
                singleCubValue: "25",
            },
            {
                singleCubCard: "39",
                singleCubValue: "25",
            },
            {
                singleCubCard: "49",
                singleCubValue: "25",
            },
            {
                singleCubCard: "8",
                singleCubValue: "35",
            },
            {
                singleCubCard: "18",
                singleCubValue: "35",
            },
            {
                singleCubCard: "28",
                singleCubValue: "35",
            },
            {
                singleCubCard: "38",
                singleCubValue: "35",
            },
            {
                singleCubCard: "48",
                singleCubValue: "35",
            },
            {
                singleCubCard: "7",
                singleCubValue: "55",
            },
            {
                singleCubCard: "17",
                singleCubValue: "55",
            },
            {
                singleCubCard: "27",
                singleCubValue: "55",
            },
            {
                singleCubCard: "37",
                singleCubValue: "55",
            },
            {
                singleCubCard: "47",
                singleCubValue: "55",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "1",
        gameProcess: "1",
        calculateScore: "0",
    },
    {
        id: "73",
        value: "33, 45, 55, 77",
        target: "1700",
        createFixCub: [
            {
                fixCubCard: "8",
                fixCubValue: "20",
            },
            {
                fixCubCard: "6",
                fixCubValue: "30",
            },
            {
                fixCubCard: "4",
                fixCubValue: "40",
            },
            {
                fixCubCard: "48",
                fixCubValue: "20",
            },
            {
                fixCubCard: "46",
                fixCubValue: "30",
            },
            {
                fixCubCard: "44",
                fixCubValue: "40",
            },
        ],
        createSingleCub: [
            {
                singleCubCard: "29",
                singleCubValue: "50",
            },
            {
                singleCubCard: "27",
                singleCubValue: "50",
            },
            {
                singleCubCard: "25",
                singleCubValue: "50",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "7",
        gameProcess: "1",
        calculateScore: "1",
    },
    {
        id: "74",
        value: "5, 40, 44, 88",
        target: "1800",
        createSingleCub: [
            {
                singleCubCard: "6",
                singleCubValue: "",
            },
            {
                singleCubCard: "16",
                singleCubValue: "",
            },
            {
                singleCubCard: "26",
                singleCubValue: "",
            },
            {
                singleCubCard: "36",
                singleCubValue: "",
            },
            {
                singleCubCard: "46",
                singleCubValue: "",
            },
            {
                singleCubCard: "8",
                singleCubValue: "",
            },
            {
                singleCubCard: "18",
                singleCubValue: "",
            },
            {
                singleCubCard: "28",
                singleCubValue: "",
            },
            {
                singleCubCard: "38",
                singleCubValue: "",
            },
            {
                singleCubCard: "48",
                singleCubValue: "",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "4",
        gameProcess: "4",
        gameProcessSwap: "30",
        calculateScore: "0",
    },
    {
        id: "75",
        value: "5, 33, 60, 77",
        target: "1900",
        createFixCub: [
            {
                fixCubCard: "9",
                fixCubValue: "50",
            },
            {
                fixCubCard: "49",
                fixCubValue: "50",
            },
            {
                fixCubCard: "18",
                fixCubValue: "50",
            },
            {
                fixCubCard: "38",
                fixCubValue: "50",
            },
            {
                fixCubCard: "27",
                fixCubValue: "50",
            },
            {
                fixCubCard: "16",
                fixCubValue: "50",
            },
            {
                fixCubCard: "36",
                fixCubValue: "50",
            },
            {
                fixCubCard: "5",
                fixCubValue: "50",
            },
            {
                fixCubCard: "45",
                fixCubValue: "50",
            },
        ],
        startTimerGame: "0",
        getRandomValue: "5",
        gameProcess: "5",
        gameProcessDel: "30",
        calculateScore: "0",
    },
];
