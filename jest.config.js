module.exports = {
    roots: [
        "<rootDir>/frontend"
    ],
    transform: {
        "^.+\\.(tsx|ts)$": "ts-jest"
    },
    testRegex: ".test.(jsx?|tsx?)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
};
