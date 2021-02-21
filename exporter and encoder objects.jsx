// ame exporter and encoder objects

// exporter
var exporter = app.getExporter();
// attributes
exporter.encodeId;
exporter.result;
exporter.elapsedMilliseconds;
// methods
exporter.removeAllBatchItems();
exporter.trimExportForSR();
exporter.exportItem();
exporter.exportGroup();

// encoder (host)
var encoder = app.getEncoderHost();
// methods
encoder.runBatch();
encoder.pauseBatch();
encoder.stopBatch();
encoder.isBatchRunning();
encoder.getFormatList();
encoder.createEncoderForFormat();
enoder.createMediaComparator();
encoder.getSupportedImportFileTypes();
encoder.getSourceInfo();
encoder.getCurrentBatchPreview();
