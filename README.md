# oxynet


# Koinophilia

- Total number of responses = 100

- Female responses = 33

- Male Responses = 65

- Prefer not to say people = 2

## Male

- Section 1 : Average vs Distinct
  
  - Mean Average 
    
    - 57 + 57 + 62 + 53 + 62 + 49 = 56.6667
  
  - Mean Distinct
    
    - 8 + 8 + 3 + 12 + 3 + 16 = 5.6667

- Section 2 : More averaged vs less averaged
  
  | Set | Opt 1 | Opt 2 | Number  |     |
  | --- | ----- | ----- | ------- | --- |
  | 3.1 | 6     | 2     | 24 , 41 |     |
  | 3.2 | 6     | 12    | 35 , 30 |     |
  | 3.3 | 6     | 2     | 60 , 5  |     |
  | 3.4 | 2     | 12    | 34 , 31 |     |
  | 3.5 | 6     | 2     | 52 , 13 |     |
  | 3.6 | 2     | 12    | 50 , 15 |     |
  
  - Mean Average 6 
    
    - 24 + 35 + 60 + 52 = 42.75
  
  - Mean  2
    
    - 41 + 5 + 34 + 13 + 50 = 28.6
  
  - Mean 12
    
    - 30 + 31 + 15 = 25.33333

## Females

- Section 1 : Average vs Distinct
  
  - Mean Average
    
    - 33 +  28 + 32 + 32 + 29 + 3 = 26.1667
  
  - Mean Distinct
    
    - 0 + 5 + 1 + 1 + 4 + 30 = 6.8333

- Section 2 : More averaged vs less averaged
  
  | Set | Opt 1 | Opt 2 | Number |     |
  | --- | ----- | ----- | ------ | --- |
  | 5.1 | 6     | 2     | 26 , 7 |     |
  | 5.2 | 6     | 12    | 3 , 30 |     |
  | 5.3 | 2     | 12    | 24 , 9 |     |
  | 5.4 | 6     | 2     | 28 , 5 |     |
  | 5.5 | 6     | 2     | 5 , 28 |     |
  | 5.6 | 2     | 12    | 4 , 29 |     |
  
  - Mean Average 6
    
    - 26 + 3 + 28 + 5 = 15.5
  
  - Mean 2
    
    - 7 + 24 + 5 + 28 + 4 = 13.6
  
  - Mean 12
    
    - 30 + 9 + 29 = 22.6666

---

# F - Test

## Average vs Distinct

The null hypothesis 

            H_0  : There is no signicant difference between preference between averaged face and distinct face



#### Males

![](/home/abhay/.config/marktext/images/2021-05-13-19-04-22-image.png)

The t-test p value is shorter than 0.05 thus we can reject the null hypothesis



#### Females

![](/home/abhay/.config/marktext/images/2021-05-13-19-05-14-image.png)

The t-test p value is shorter than 0.05 thus we can reject the null hypothesis

# Comparing averages

## Males

![](/home/abhay/.config/marktext/images/2021-05-13-19-31-59-image.png)

From the graph we can see that there is no significant difference between 12 averaged and 2 averaged face . We can also see that there is no significant difference between any of the comparisons. However if we can collect more data maybe we can see that there is a significant difference between the 6 average and both 2 and 12 averaged faces.

Thus we can speculate if enough data was provided that the 6 averaged face is more favoured. This may be because the 12 averaged faces might have become more darkened making it a little harder for the subjects to see the details and the 2 and 6 averaged were lighter. However between 2 and 6 averaged the 2 averaged had more distict facial featurs and 6 was more averaged but less darkened. Thus making it a more favourable.

## Females

![](/home/abhay/.config/marktext/images/2021-05-13-19-43-23-image.png)

Here the female candidates might have a different tastes when it comes to beauty. Here we can see that none of the comparisons cross the critical point making all of them fail to reject the null hypothesis. This is probably due less sample size. However if we see that the variance is almost similar in the case of 12 and 2 thus if we could have more sample size we could probably conclude that there might be a significant difference. In the rest of the comparisons we can see it fail. Thus we can speculate that there is less significant differenence in 6 and 12 and 6 and 2. The significance might reduce due to the fact discussed in the last part that the averaging software is not doing a good job in making an averaged face. Thus some sort of color prejudice might be arising which the female subjects choose the lighter shade ones which were the 2 averaged.



# Conclusion

Thus we can conclude that the averaged face is more prefereed compared to the distinct one. I would not like to conclude anything right now due to the lack of diversity of the subjects/ volunteers. A better sample size and a software that used AI/CNN which might be able to genreate a better averaged face then we could have made a better conclusion. However still it might just be a speculation as humans tend to be more complex and look for mental compatibility as well. However there is no test yet available that might be able to check for this trait and compare it. This is the final conclusion


