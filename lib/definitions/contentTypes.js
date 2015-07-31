module.exports = Object.freeze({
    defaults: {
        jpeg: "image/jpeg",
        jpg: "image/jpg",
        png: "image/png"
        rels: "application/vnd.openxmlformats-package.relationships+xml",
        xml: "application/xml"
    },
    overrides: {
        coreProperties: "application/vnd.openxmlformats-package.core-properties+xml",
        drawing: "application/vnd.openxmlformats-officedocument.drawing+xml",
        styles: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
        theme: "application/vnd.openxmlformats-officedocument.theme+xml",
        workbook: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
        worksheet: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"
    }
});