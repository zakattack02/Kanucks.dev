// src/components/InteractiveResume.jsx
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

// Set up PDF.js worker using CDN
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const InteractiveResume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useIframe, setUseIframe] = useState(false);

  // Test PDF accessibility
  React.useEffect(() => {
    const testPdfAccess = async () => {
      try {
        const response = await fetch('/resume.pdf');
        if (!response.ok) {
          console.error('PDF file not accessible:', response.status, response.statusText);
          setError(`PDF not found: ${response.status} ${response.statusText}`);
          setLoading(false);
        } else {
          console.log('PDF file is accessible');
          console.log('Response headers:', response.headers);
        }
      } catch (err) {
        console.error('Error accessing PDF:', err);
        setError(`Network error: ${err.message}`);
        setLoading(false);
      }
    };
    testPdfAccess();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = (error) => {
    setError(`Failed to load PDF: ${error.message}`);
    setLoading(false);
    console.error('PDF load error:', error);
    console.log('Attempted to load PDF from: /resume.pdf');
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.6));
  };

  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-8">Resume</h3>
      
      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
        {/* Page Navigation */}
        <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1 shadow-lg">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="px-4 py-2 rounded-full text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-white font-medium">
            Page {pageNumber} of {numPages || '--'}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 rounded-full text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
          >
            Next
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1 shadow-lg">
          <button
            onClick={zoomOut}
            className="px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Zoom Out
          </button>
          <span className="px-4 py-2 text-white font-medium">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Zoom In
          </button>
        </div>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download="Zak_Konik_Resume.pdf"
          className="px-6 py-2 backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 font-medium shadow-lg"
        >
          Download PDF
        </a>

        {/* Toggle View Button */}
        <button
          onClick={() => setUseIframe(!useIframe)}
          className="px-6 py-2 backdrop-blur-md bg-blue-500/20 border border-blue-500/30 text-white rounded-full hover:bg-blue-500/30 hover:scale-105 transition-all duration-300 font-medium shadow-lg"
        >
          {useIframe ? 'Use PDF Viewer' : 'Use Simple View'}
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {useIframe ? (
            /* Simple iframe fallback */
            <iframe
              src="/resume.pdf"
              width="800"
              height="600"
              title="Resume PDF"
              className="border-0"
            >
              <p>Your browser does not support iframes. 
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Click here to view the PDF
                </a>
              </p>
            </iframe>
          ) : (
            <>
              {loading && (
                <div className="flex items-center justify-center h-96 text-black">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                    <p>Loading resume...</p>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="flex items-center justify-center h-96 text-red-600 bg-red-50">
                  <div className="text-center p-8">
                    <p className="mb-4">{error}</p>
                    <p className="text-sm text-gray-600">
                      Try the "Use Simple View" button above, or 
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                        open PDF directly
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {!loading && !error && (
                <Document
                  file="/resume.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className="flex items-center justify-center h-96 text-black">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                        <p>Loading document...</p>
                      </div>
                    </div>
                  }
                  error={
                    <div className="flex items-center justify-center h-96 text-red-600 bg-red-50">
                      <div className="text-center p-8">
                        <p className="mb-4">Error loading PDF</p>
                        <p className="text-sm text-gray-600">
                          Please check if resume.pdf exists in the public folder
                        </p>
                      </div>
                    </div>
                  }
                >
                  <Page 
                    pageNumber={pageNumber} 
                    scale={scale}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Document>
              )}
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default InteractiveResume;
