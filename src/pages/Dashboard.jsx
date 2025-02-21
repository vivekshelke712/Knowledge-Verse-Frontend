import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "DSA Problems Solved",
        data: [10, 20, 30, 25, 40, 50],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold">Quick Stats</h2>
          <p>Topics Completed: 15</p>
          <p>Pending Revisions: 5</p>
          <p>Time Spent Learning: 10 hrs</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold">Today's Tasks</h2>
          <ul>
            <li>Review Graphs</li>
            <li>Solve 5 DSA problems</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold">Recent Activities</h2>
          <ul>
            <li>Added a new resource</li>
            <li>Completed a topic on Trees</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardContent>
          <h2 className="text-xl font-bold">Progress Graph</h2>
          <Line data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;