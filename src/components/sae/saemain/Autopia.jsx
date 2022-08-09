import React, { useState } from "react";
// import Pdf from "@mikecousins/react-pdf";


const Autopia = () => {

    const [page, setPage] = useState(1);
    console.log(window.innerWidth);

    return (
        <>


            {/* <section className="pdf text-center justify-content-center align-content-center" style={{ height: "120vh", width: "auto" }}>
                <Pdf file="https://drive.google.com/file/d/1U52AJ3t8rzPYsUGRGXTvaSshXuUxioAl/view?usp=sharing" page={page}>
                    {({ pdfDocument, pdfPage, canvas }) => (
                        <>
                            {!pdfDocument && <span>Loading...</span>}
                            {canvas}
                            {Boolean(pdfDocument && pdfDocument.numPages) && (
                                <nav className="text-center">
                                    <ul className="pager">
                                        <ol className="previous" style={{ textDecoration: "none" }}>
                                            <button style={{ background: "red" }} className="mr-3 p-2 text-white"
                                                disabled={page === 1}
                                                onClick={() => setPage(page - 1)}
                                            >
                                                Previous
                                            </button>
                                            <button style={{ background: "red" }} className="mr-3 p-2  text-white"
                                                disabled={page === pdfDocument.numPages}
                                                onClick={() => setPage(page + 1)}
                                            >
                                                Next
                                            </button>
                                        </ol>
                                        
                                    </ul>
                                </nav>
                            )}
                        </>
                    )}
                </Pdf>
            </section> */}
            <h1>pdf</h1>

        </>
    )
}

export default Autopia
