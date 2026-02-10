import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Brain, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  ThumbsUp,
} from 'lucide-react';

// Assessment Questions Data
const questions = [
  // Anxiety (4 questions)
  { id: 1, text: "How often do you feel nervous or anxious?", category: "anxiety" },
  { id: 2, text: "Do you find it hard to stop worrying about things?", category: "anxiety" },
  { id: 3, text: "How often do you experience restlessness or feel on edge?", category: "anxiety" },
  { id: 4, text: "Do you have trouble relaxing even when nothing is wrong?", category: "anxiety" },
  
  // Depression (4 questions)
  { id: 5, text: "How often do you feel down, depressed, or hopeless?", category: "depression" },
  { id: 6, text: "Do you have little interest or pleasure in doing things you used to enjoy?", category: "depression" },
  { id: 7, text: "How often do you feel tired or have little energy?", category: "depression" },
  { id: 8, text: "Do you feel bad about yourself or that you're a failure?", category: "depression" },
  
  // Stress (4 questions)
  { id: 9, text: "How often do you feel overwhelmed by your responsibilities?", category: "stress" },
  { id: 10, text: "Do you have difficulty managing your time and tasks?", category: "stress" },
  { id: 11, text: "How often do you feel irritated or frustrated?", category: "stress" },
  { id: 12, text: "Do you experience physical tension (headaches, muscle pain)?", category: "stress" },
  
  // Sleep (4 questions)
  { id: 13, text: "Do you have trouble falling asleep at night?", category: "sleep" },
  { id: 14, text: "How often do you wake up during the night or too early?", category: "sleep" },
  { id: 15, text: "Do you feel refreshed after waking up in the morning?", category: "sleep" },
  { id: 16, text: "How often do you feel sleepy during the day?", category: "sleep" },
  
  // Social (4 questions)
  { id: 17, text: "Do you feel comfortable in social situations?", category: "social" },
  { id: 18, text: "How often do you feel lonely or isolated?", category: "social" },
  { id: 19, text: "Do you have people you can turn to for support?", category: "social" },
  { id: 20, text: "How often do you avoid social interactions?", category: "social" },
];

const answerOptions = [
  { value: 0, label: "Never" },
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often" },
  { value: 4, label: "Always" },
];

// Reverse scoring for positive questions (15, 17, 19)
const reverseScoreQuestions = [15, 17, 19];

// Calculate Results Function
const calculateResults = (answers) => {
  const categoryTotals = {
    anxiety: [],
    depression: [],
    stress: [],
    sleep: [],
    social: [],
  };

  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question) {
      let score = answer.value;
      // Reverse scoring for positive questions
      if (reverseScoreQuestions.includes(answer.questionId)) {
        score = 4 - score;
      }
      categoryTotals[question.category].push(score);
    }
  });

  const categoryScores = {
    anxiety: categoryTotals.anxiety.reduce((a, b) => a + b, 0) / categoryTotals.anxiety.length,
    depression: categoryTotals.depression.reduce((a, b) => a + b, 0) / categoryTotals.depression.length,
    stress: categoryTotals.stress.reduce((a, b) => a + b, 0) / categoryTotals.stress.length,
    sleep: categoryTotals.sleep.reduce((a, b) => a + b, 0) / categoryTotals.sleep.length,
    social: categoryTotals.social.reduce((a, b) => a + b, 0) / categoryTotals.social.length,
  };

  const overallScore = (
    categoryScores.anxiety +
    categoryScores.depression +
    categoryScores.stress +
    categoryScores.sleep +
    categoryScores.social
  ) / 5;

  let level;
  if (overallScore <= 1) level = 'low';
  else if (overallScore <= 2) level = 'mild';
  else if (overallScore <= 3) level = 'moderate';
  else level = 'high';

  const recommendations = generateRecommendations(categoryScores, overallScore);

  return {
    overallScore,
    categoryScores,
    level,
    recommendations
  };
};

const generateRecommendations = (categoryScores, overallScore) => {
  const recommendations = [];

  if (categoryScores.anxiety > 2.5) {
    recommendations.push('Consider anxiety management techniques like deep breathing and meditation.');
  }
  if (categoryScores.depression > 2.5) {
    recommendations.push('Speaking with a therapist about your mood may be beneficial.');
  }
  if (categoryScores.stress > 2.5) {
    recommendations.push('Stress management strategies and time management could help improve your well-being.');
  }
  if (categoryScores.sleep > 2.5) {
    recommendations.push('Improving sleep hygiene may significantly enhance your mental health.');
  }
  if (categoryScores.social > 2.5) {
    recommendations.push('Building social connections and support networks is important for mental wellness.');
  }

  if (recommendations.length === 0) {
    recommendations.push('Keep up the great work maintaining your mental wellness!');
    recommendations.push('Consider periodic check-ins to stay on track.');
  }

  if (overallScore > 2) {
    recommendations.push('We recommend scheduling a consultation with one of our mental health professionals.');
  }

  return recommendations;
};

// Progress Component
const Progress = ({ value, className = '' }) => {
  return (
    <div className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}>
      <div
        className="h-full bg-teal-500 transition-all duration-300 ease-in-out"
        style={{ width: `${value || 0}%` }}
      />
    </div>
  );
};

// Button Component
const Button = ({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary', 
  size = 'md',
  className = '',
  asChild = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 disabled:bg-gray-300 disabled:cursor-not-allowed',
    outline: 'border-2 border-teal-500 text-teal-500 hover:bg-teal-50 focus:ring-teal-500 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed'
  };

  const sizes = {
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple Layout Component
const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

// Main Assessment Component
const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [started, setStarted] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(
      (a) => a.questionId === questions[currentQuestion].id
    );
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex].value = value;
    } else {
      newAnswers.push({ questionId: questions[currentQuestion].id, value });
    }
    
    setAnswers(newAnswers);

    // Auto advance after short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (answers.length === questions.length) {
      const results = calculateResults(answers);
      setResult(results);
    }
  };

  const getCurrentAnswer = () => {
    return answers.find((a) => a.questionId === questions[currentQuestion].id)?.value;
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case 'low':
        return <ThumbsUp className="w-8 h-8" />;
      case 'mild':
        return <CheckCircle className="w-8 h-8" />;
      case 'moderate':
        return <AlertTriangle className="w-8 h-8" />;
      case 'high':
        return <XCircle className="w-8 h-8" />;
      default:
        return <CheckCircle className="w-8 h-8" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'low':
        return 'text-green-500';
      case 'mild':
        return 'text-blue-500';
      case 'moderate':
        return 'text-yellow-500';
      case 'high':
        return 'text-red-500';
      default:
        return 'text-teal-500';
    }
  };

  const getLevelBgColor = (level) => {
    switch (level) {
      case 'low':
        return 'bg-green-100';
      case 'mild':
        return 'bg-blue-100';
      case 'moderate':
        return 'bg-yellow-100';
      case 'high':
        return 'bg-red-100';
      default:
        return 'bg-teal-100';
    }
  };

  const getCategoryLabel = (category) => {
    const labels = {
      anxiety: 'Anxiety',
      depression: 'Depression',
      stress: 'Stress',
      sleep: 'Sleep Quality',
      social: 'Social Well-being',
    };
    return labels[category] || category;
  };

  // Start Screen
  if (!started) {
    return (
      <Layout>
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mental Wellness Assessment
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Understand your mental health better with our comprehensive self-assessment
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center shadow-lg">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Take the First Step
              </h2>
              <p className="text-gray-600 mb-6">
                This assessment consists of 20 questions designed to help you understand 
                your mental wellness across five key areas: anxiety, depression, stress, 
                sleep, and social well-being.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Before you begin:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• This takes approximately 5-7 minutes to complete</li>
                  <li>• Answer honestly based on the past 2 weeks</li>
                  <li>• Your responses are confidential</li>
                  <li>• This is not a clinical diagnosis</li>
                </ul>
              </div>
              <Button size="lg" onClick={() => setStarted(true)} className="gap-2">
                Start Assessment <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Results Screen
  if (result) {
    return (
      <Layout>
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-12">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Your Assessment Results
            </h1>
            <p className="opacity-90">Based on your responses</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Overall Score */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8 text-center shadow-lg">
              <div className={`w-20 h-20 mx-auto rounded-full ${getLevelBgColor(result.level)} flex items-center justify-center mb-4 ${getLevelColor(result.level)}`}>
                {getLevelIcon(result.level)}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Overall Mental Wellness:{' '}
                <span className={getLevelColor(result.level)}>
                  {result.level.charAt(0).toUpperCase() + result.level.slice(1)} Concern
                </span>
              </h2>
              <p className="text-gray-600">
                Score: {((result.overallScore / 4) * 100).toFixed(0)}/100
              </p>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Category Breakdown
              </h3>
              <div className="space-y-4">
                {Object.entries(result.categoryScores).map(([category, score]) => (
                  <div key={category}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {getCategoryLabel(category)}
                      </span>
                      <span className="text-sm text-gray-600">
                        {((score / 4) * 100).toFixed(0)}/100
                      </span>
                    </div>
                    <Progress value={(score / 4) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Personalized Recommendations
              </h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-600 text-center">
                <strong>Disclaimer:</strong> This assessment is for informational purposes only 
                and is not a substitute for professional diagnosis or treatment. If you're 
                experiencing mental health concerns, please consult with a qualified mental 
                health professional.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                <a href="/contact">Schedule a Consultation</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setResult(null);
                  setAnswers([]);
                  setCurrentQuestion(0);
                  setStarted(false);
                }}
              >
                Take Again
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Question Screen
  return (
    <Layout>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-2 flex justify-between text-sm text-gray-600">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-xs font-medium mb-4 capitalize">
              {questions[currentQuestion].category}
            </span>

            {/* Question */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
              {questions[currentQuestion].text}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {answerOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    getCurrentAnswer() === option.value
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300'
                  }`}
                >
                  <span className="font-medium text-gray-900">{option.label}</span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </Button>

              {currentQuestion === questions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={answers.length !== questions.length}
                  className="gap-2"
                >
                  View Results <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  disabled={getCurrentAnswer() === undefined}
                  className="gap-2"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Assessment;
