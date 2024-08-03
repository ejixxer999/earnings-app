import React, { useEffect, useState } from "react";
import { getEarningsReports } from "./api";

const EarningsReports = ({ symbol }) => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        if (!symbol) {
            console.log('No symbol provided')
            setReports(null)
            setLoading(false)
            return;
        }

        setLoading(false)
        setError(null)
        try {
            console.log('Fetching data for symbol:', symbol)
          const data = await getEarningsReports(symbol);
          if (data && data.quarterlyEarnings) {
            setReports(data.quarterlyEarnings);
          } else {
            setError('Unexpected data format');
          }
        } catch (error) {
          console.error('Error fetching earnings reports:', error);
          setError('Failed to fetch earnings reports');
        }
      };
  
      fetchData();
    }, [symbol]);

    if(loading) return <div>Loading...</div>
    if (error) {
        return <div>Error: {error}</div>;
    }
    if(!reports) return <div>No reports found</div>
  
    return (
      <div>
        <h2>Earnings Reports for {symbol}</h2>
        {/* <pre>{JSON.stringify(reports, null, 2)}</pre> */}
        <ul>
          {reports.map((report, index) => (
            <li key={index}>
              <p>Date: {report.fiscalDateEnding}</p>
              <p>Reported EPS: {report.reportedEPS}</p>
              <p>Estimated EPS: {report.estimatedEPS}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EarningsReports;