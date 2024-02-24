# The goal of this exercise

The goal of this exercise is to see how you work, your thought process, and your facility with the stack we use at Rigetti, without demanding too much of your free time. We will be looking for completeness and correctness as well as usability and code quality.

## Problem Statement

Our quantum devices are cooled down in cryogenic fridges. The operations team captures the time (`cooldown_start`) when each fridge starts cooling down with a new Quantum Processing Unit (QPU), is done cooling down to the target temperature (`cooldown_end`), begins to warm up to remove the QPU (`warmup_start`), and finishes warming up (`warmup_end`). The time from one `cooldown_start` to the next `cooldown_start` on the same fridge is called a "cooldown cycle."

In this scenario, our operations team has asked us to build a dashboard where they can view some metrics on our cooldown cycles. Please build a web application to display this data using React for the frontend and Python for the backend. (If Python is not a comfortable option for quickly rolling up a new backend, you may use JavaScript instead.) Feel free to hardcode the data on the backend to avoid the work of using a database.

### Dashboard

Please show a table of the cooldown cycle data provided below, along with plots that display the following:

- Cooldown time, i.e., from `cooldown_start` to `cooldown_end`, per cycle
- Cold time, i.e., from `cooldown_end` to `warmup_start`, per cycle
- Warmup time, i.e., from `warmup_start` to `warmup_end`, per cycle
- Warm time, i.e., from `warmup_end` of one cycle to `cooldown_start` of the next cycle of the same fridge, per cycle
- A summary of the percentage of time spent in each phase of the cycles

Desirable enhancements would include the ability to downselect rows in the table by filtering on fridge or time ranges on the `cooldown_start` time.

### Data

Please use this example dataset.
fridge_id,cooldown_number,cooldown_start,cooldown_end,warmup_start,warmup_end
0,0,2016-01-05 08:10:00,2016-01-06 14:27:00,2016-01-10 08:15:00,2016-01-11 09:12:00
0,1,2016-01-12 09:23:00,2016-01-13 16:01:00,2016-01-17 08:24:00,2016-01-18 08:11:00
0,2,2016-01-19 08:04:00,2016-01-20 12:57:00,2016-01-24 08:47:00,2016-01-25 08:45:00
0,3,2016-01-26 08:49:00,2016-01-27 18:13:00,2016-01-31 09:21:00,2016-02-01 07:18:00
1,0,2016-01-05 08:18:00,2016-01-06 13:22:00,2016-01-10 08:45:00,2016-01-11 10:35:00
1,1,2016-01-12 08:43:00,2016-01-13 14:32:00,2016-01-17 08:51:00,2016-01-18 09:56:00
1,2,2016-01-19 08:22:00,2016-01-20 13:41:00,2016-01-24 09:24:00,2016-01-25 09:26:00
1,3,2016-01-26 08:09:00,2016-01-27 12:15:00,2016-01-31 08:28:00,2016-02-01 08:37:00
2,0,2016-01-05 08:59:00,2016-01-06 16:53:00,2016-01-10 08:48:00,2016-01-11 09:48:00
2,1,2016-01-12 09:11:00,2016-01-13 16:55:00,2016-01-17 09:21:00,2016-01-18 08:19:00
2,2,2016-01-19 07:45:00,2016-01-20 17:01:00,2016-01-24 08:10:00,2016-01-25 09:13:00
2,3,2016-01-26 08:33:00,2016-01-27 14:04:00,2016-01-31 08:00:00,2016-02-01 07:22:00
3,0,2016-01-05 08:21:00,2016-01-06 15:23:00,2016-01-10 09:05:00,2016-01-11 09:28:00
3,1,2016-01-12 08:55:00,2016-01-13 15:28:00,2016-01-17 08:39:00,2016-01-18 10:49:00
3,2,2016-01-19 08:43:00,2016-01-20 14:52:00,2016-01-24 09:48:00,2016-01-25 09:20:00
3,3,2016-01-26 09:05:00,2016-01-27 15:25:00,2016-01-31 08:51:00,2016-02-01 07:31:00

### Format

- Please provide your source code in a git repository including instructions to run the application locally.

## Timeline

- Our intent is that you should be able to complete the exercise in 2-4 hours, assuming you are very comfortable and fast at setting up your environment and build.
- Please try to submit your solution within 7 days of your receiving it. If you require more time, please just let your recruiter know.

## Submission

- Email your completed solution to your recruiter as a reply in this thread and they’ll share it with the team. If hosted online, remember to provide us with access.
