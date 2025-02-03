"use client";
import React, { use, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const {user} = useUser()
  const router = useRouter()

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const inputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}, Depends on this information please give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Interview question with Answered in Json Format, Give Question and Answered as field in JSON`;

    const result = await chatSession.sendMessage(inputPrompt);

    const MockJsonResp = (result.response
      .text())
      .replace('```json', '')
      .replace('```', '');

    console.log(JSON.parse(MockJsonResp));

    setJsonResponse(MockJsonResp);

    if (MockJsonResp){

      const resp = await db.insert(MockInterview)
      .values({
        mockId: uuidv4(),
        jsonMockResp: MockJsonResp,
        jobPosition: jobPosition,
        jobDesc: jobDesc,
        jobExperience: jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-yyyy"),
        createdAt: new Date().toISOString()
      }).returning({mockId: MockInterview.mockId})
  
      console.log("Inserted Id: ", resp )

      if(resp){
        setOpenDialog(false)
        router.push(`/dashboard/interview/${resp[0]?.mockId}`)
      }
    }
    else {
      console.log("ERROR")
    }


    setLoading(false);
  };

  
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-2xl text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2 className="text-sm">
                    Add Details about your Job position/role, Job description
                    and Year of experience{" "}
                  </h2>

                  <div className="mt-7 my-3">
                    <label>Job role/ Job position</label>
                    <Input
                      value={jobPosition}
                      onChange={(event) => setJobPosition(event.target.value)}
                      placeholder="Ex. Full Stack Developer"
                      required
                    />
                  </div>

                  <div className="my-3">
                    <label>Job Description/ Tech Stack (in short)</label>
                    <Textarea
                      value={jobDesc}
                      onChange={(event) => setJobDesc(event.target.value)}
                      placeholder="Ex. React, Angular, NodeJs, MySql etc."
                    />
                  </div>

                  <div className="my-3">
                    <label>Year of experience</label>
                    <Input
                      value={jobExperience}
                      onChange={(event) => setJobExperience(event.target.value)}
                      placeholder="Ex. 2"
                      type="number"
                      max={50}
                    />
                  </div>
                </div>

                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        'Generating from AI'
                      </>
                    ) : (
                      'Start Interview'
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
