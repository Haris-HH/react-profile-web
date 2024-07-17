"use client"

import React from "react";
import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ReactComponent as DowloadButton } from "@/assets/svg/download-button.svg"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function Resume() {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [hovered, setHovered] = useState<boolean>(false)
  const resumeFile = "/resume/Haris_Heamanunt.pdf"

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  function priviousPageButton({ pageNumber }: { pageNumber: number }): boolean {
    if (pageNumber <= 1) {
      return true
    }
    else {
      return false
    }
  }

  function nextPageButton({ pageNumber, numPages }: { pageNumber: number, numPages: number | undefined }): boolean {
    if (numPages != undefined && pageNumber >= numPages) {
      return true
    }
    else {
      return false
    }
  }

  const handleDownload = () => {
    fetch(resumeFile)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "Haris_Heamanunt.pdf" || "downloaded-file";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <section id="resume" className="flex justify-center items-center bg-[#e5e7eb]">
      <div id="resume-container">
        <div id="resume-preview" className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <Document file={resumeFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} height={800} width={600} />
          </Document>
          <motion.div className="absolute top-[2%] right-[5%]"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: hovered ? 3 : 0,
              zIndex: 50 
            }}
            transition={{ duration: 0.2 }}
            onClick={handleDownload}
          >
            <DowloadButton width="25" height="25" href="/resume/Haris_Heamanunt.pdf"></DowloadButton>
          </motion.div>
          <motion.div className="absolute bottom-[5%] left-[50%] -translate-x-[50%] opacity-0 z-50 text-[#333333]"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <button type="button" className={ cn(priviousPageButton({pageNumber}) ? "text-zinc-200" : "bg-transparent" , "mr-1 bg-transparent p-3") } disabled={priviousPageButton({ pageNumber })}>&lt;</button>
            <span className="bg-zinc-100 shadow-md p-3">
              Page {pageNumber} of {numPages}
            </span>
            <button type="button" className={ cn(nextPageButton({ pageNumber, numPages }) ? "text-zinc-200" : "bg-transparent" , "mr-1 bg-transparent p-3") } disabled={nextPageButton({ pageNumber, numPages })}>&gt;</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume