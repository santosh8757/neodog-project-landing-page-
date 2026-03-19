import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const departments = [
  "Computer Science Engineering",
  "Electronics & Telecommunication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
];

const designations = [
  "Assistant Professor",
  "Associate Professor",
  "Professor",
  "Head of Department",
  "Lecturer",
  "Lab Assistant",
];

interface Review {
  id: number;
  department: string;
  designation: string;
  teacherName: string;
  rating: number;
  comment: string;
  date: string;
}

const TeacherReview = () => {
  const { toast } = useToast();
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      department: "Computer Science Engineering",
      designation: "Assistant Professor",
      teacherName: "Subhankar Dash",
      rating: 5,
      comment: "Excellent teacher! Explains complex topics with great clarity and patience. Always available for doubt clearing.",
      date: "2025-03-15",
    },
  ]);

  const handleSubmit = () => {
    if (!department || !designation || !teacherName || rating === 0 || !comment) {
      toast({ title: "Please fill all fields", description: "All fields including rating are required.", variant: "destructive" });
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      department,
      designation,
      teacherName,
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([newReview, ...reviews]);
    setDepartment("");
    setDesignation("");
    setTeacherName("");
    setRating(0);
    setComment("");
    toast({ title: "Review Posted!", description: `Your review for ${newReview.teacherName} has been submitted.` });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold md:text-5xl"
          >
            Teacher Review
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-3 max-w-lg opacity-90"
          >
            Share your experience and feedback about your teachers at C.V. Raman Polytechnic.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <SectionHeading title="Post a Review" subtitle="Select the department, designation, and provide your feedback." />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="space-y-5 rounded-lg border border-border bg-card p-6 shadow-sm"
          >
            {/* Department */}
            <div className="space-y-2">
              <Label htmlFor="department">1. Choose Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <Label htmlFor="designation">2. Choose Designation</Label>
              <Select value={designation} onValueChange={setDesignation}>
                <SelectTrigger id="designation">
                  <SelectValue placeholder="Select Designation" />
                </SelectTrigger>
                <SelectContent>
                  {designations.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Teacher Name */}
            <div className="space-y-2">
              <Label htmlFor="teacherName">3. Teacher Name</Label>
              <Input
                id="teacherName"
                placeholder="e.g. Subhankar Dash"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
              />
            </div>

            {/* Star Rating */}
            <div className="space-y-2">
              <Label>4. Rating</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-7 w-7 ${
                        star <= (hoverRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <Label htmlFor="comment">5. Your Review</Label>
              <Textarea
                id="comment"
                placeholder="Write your feedback about this teacher..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
              />
            </div>

            <Button onClick={handleSubmit} className="w-full gap-2" size="lg">
              <Send className="h-4 w-4" /> Post Review
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="bg-surface-alt py-16">
        <div className="container max-w-2xl">
          <SectionHeading title="Recent Reviews" subtitle="See what students are saying about their teachers." />

          <div className="space-y-4">
            {reviews.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{r.teacherName}</h3>
                    <p className="text-sm text-muted-foreground">
                      {r.designation} · {r.department}
                    </p>
                  </div>
                  <div className="flex shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{r.comment}</p>
                <p className="mt-2 text-xs text-muted-foreground/60">{r.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherReview;
