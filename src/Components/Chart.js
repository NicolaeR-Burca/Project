import React from "react";
import { Bar } from "react-chartjs-2";
import Firebase from "./Firebase";
import { useState, useEffect } from "react";

const BarChart = () => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const FetchClients = async () => {
      const db = Firebase.firestore();
      await db.collection("statistics").onSnapshot((snapshot) => {
        const newStats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStats(newStats);
        setIsLoading(false);
      });
    };
    FetchClients();
  }, []);

  if (!isLoading) {
    console.log(stats);
  }
  if (!stats[0]) return <h3>Loading data ...</h3>;
  return (
    <div>
      <Bar
        data={{
          labels: ["Added ", "Edited ", "Edited Fields ", "Deleted"],
          datasets: [
            {
              label: "Number of Clients",
              data: [
                stats[0].added,
                stats[0].edited,
                stats[0].editedFields,
                stats[0].deleted,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 2,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
                font: {
                  family: "monospace",
                  size: 30,
                },
              },
            },

            x: {
              ticks: {
                font: {
                  family: "monospace", // Your font family
                  size: 30,
                },
              },
            },
          },
          legend: {
            labels: {
              font: {
                family: "monospace", // Your font family
                size: 30,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
