System.config({
    transpiler: 'typescript',
    packages: {
        src: {
            defaultExtension: 'ts'
        }
    },
    map: {
        lodash: 'node_modules/lodash/lodash.js'
    }
});
System
    .import('src/main.ts')
    .then(null, console.error.bind(console));