import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          <Card className="card-professional text-center">
            <CardHeader>
              <CardTitle>Thank You!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Your submission has been received. We will review it and get back to you shortly.
              </p>
              <Button onClick={() => navigate("/")} className="btn-hero">
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;

