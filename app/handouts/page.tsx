"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Handouts(): JSX.Element {
  const [fileNames, setFileNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchFileNames = async () => {
      try {
        const response = await fetch('handout-pdfs.txt');
        if (response.ok) {
          const fileList = await response.text();
          const fileNames = fileList.split('\n').filter((name) => name.trim() !== '');
          setFileNames(fileNames);
        } else {
          console.error('Error fetching file names:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching file names:', error);
      }
    };

    fetchFileNames();
  }, []);

  return (
    <main className="flex  flex-col items-center justify-between bg-stone-800">
      <section className="flex flex-col items-center justify-center w-full h-auto bg-dark">
        <h1 className="text-white text-center text-2xl p-2">Handouts</h1>
      </section>
      <section className="flex flex-col items-center justify-center w-full bg-white">
        {fileNames.map((fileName) => (
          <object key={fileName} data={`/handouts/${fileName}`} className="p-8 h-pdf" type="application/pdf">
            <div>No online PDF viewer installed</div>
          </object>
        ))}
      </section>
    </main>
  );
}
