"use client"
import React, { useState } from 'react'

const PricingPlan = () => {
  const [isOnetime, setIsOnetime] = useState(false)

  const plans = [
    {
      name: 'Basic',
      description: "1 hour per month",
      monthlyPrice: 42,
      features: [
        '1 hour per month',
        'Project discussion',
        'Video calls',
        'Mentoring',
        'Async Q&A',
        'Code review'
      ]
    },
    {
      name: 'Pro',
      description: "5 hours per month",
      monthlyPrice: 630,
      features: [
        '5 hours per month',
        'Project discussion',
        'Video calls',
        'Mentoring',
        'Async Q&A',
        'Code review'
      ]
    },
    {
      name: 'Professional',
      description: "10 hours per month",
      monthlyPrice: 1300,
      features: [
        '10 hours per month',
        'Project discussion',
        'Video calls',
        'Mentoring',
        'Async Q&A',
        'Code review'
      ]
    },
    {
      name: 'One Time',
      description: "One-time consultation",
      onetimeprice: 42,
      features: [
        '1 hour video call on anything you wish to discuss',
        'Project discussion',
        'Mentoring',
        'Code review'
      ]
    }
  ]

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Work With Me
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          If you are seeking expert assistance with your next project or require professional guidance to enhance your coding skills, I offer both one-time consultations and ongoing monthly support to meet your specific needs.
        </p>

        {/* Toggle Buttons */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`rounded-l-lg px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-ring ${
                !isOnetime ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}
              onClick={() => setIsOnetime(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`rounded-r-lg px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-ring ${
                isOnetime ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}
              onClick={() => setIsOnetime(true)}
            >
              OneTime
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className={`grid gap-8 ${
            isOnetime ? 'md:grid-cols-3  justify-items-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {!isOnetime
            ? plans
                .filter(plan => plan.name !== 'One Time') // Exclude "One Time" plan
                .map(plan => (
                  <div
                    key={plan.name}
                    className=" bg-slate-800 w-full max-w-[950px] mx-auto overflow-hidden rounded-lg bg-card shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flex min-h-full flex-col px-6 py-8">
                      {/* Plan Name */}
                      <h3 className="mb-4 text-center text-2xl font-semibold text-foreground">
                        {plan.name}
                        <p className="text-xs text-gray-400">{plan.description}</p>
                      </h3>

                      {/* Plan Price */}
                      <div className="mb-6 text-center">
                        <span className="text-4xl font-bold text-foreground">
                          ${plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <button
                        className="bg-sky-400 text-white hover:text-black mt-auto w-full rounded-md bg-primary py-2 font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label={`Choose ${plan.name} plan`}
                      >
                        Pay
                      </button>
                      {/* Features */}
                      <ul className="mb-6 space-y-3 mt-12">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <span className="text-primary">✔️</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))
            : [
                <div key="spacer1" />,
                ...plans
                  .filter(plan => plan.name === 'One Time') // Show only "One Time" plan
                  .map(plan => (
                    <div
                      key={plan.name}
                      className="bg-slate-800 w-full max-w-[950px] mx-auto overflow-hidden rounded-lg bg-card shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                      <div className="flex min-h-full flex-col px-6 py-8">
                        {/* Plan Name */}
                        <h3 className="mb-4 text-center text-2xl font-semibold text-foreground">
                          {plan.name}
                          <p className="text-xs text-gray-400">{plan.description}</p>
                        </h3>

                        {/* Plan Price */}
                        <div className="mb-6 text-center">
                          <span className="text-4xl font-bold text-foreground">
                            ${plan.onetimeprice}
                          </span>
                        </div>
                        <button
                          className=" bg-sky-500 text-white hover:text-black  mb-12 mt-auto w-full rounded-md bg-primary py-2 font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          aria-label={`Choose ${plan.name} plan`}
                        >
                          Choose Plan
                        </button>
                        {/* Features */}
                        <ul className="mb-6 space-y-3">
                          {plan.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <span className="text-primary">✔️</span>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Choose Plan Button */}
                    
                      </div>
                    </div>
                  )),
                <div key="spacer2" />
              ]}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-muted-foreground">
          <p>Contact us if you have any questions about our pricing plans.</p>
        </div>
      </div>
    </section>
  )
}

export default PricingPlan