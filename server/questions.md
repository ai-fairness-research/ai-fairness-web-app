BIAS IN MACHINE LEARNING

How knowledgeable are you about artificial intelligence (AI) and machine learning (ML)?

Options:
Not knowledgeable at all
Slightly knowledgeable
Moderately knowledgeable
Very knowledgeable
Extremely knowledgeable

How concerned are you about potential biases or discrimination embedded in algorithmic decision-making systems?

Options:
Not concerned
Slightly concerned
Moderately concerned
Very concerned
Extremely concerned

Learning about bias in algorithmic systems

[Learning content on bias in algorithmic systems]

https://www.youtube.com/watch?v=BtgcuhQ0cks

MODEL BUILDING EVALUATION

Instructions: Please consider the three hypothetical data-related scenarios outlined below, answering the series of questions accompanying each scenario (vignette) as you read them. For each scenario, imagine you are helping a data scientist who is considering how best to reduce bias in the model outcome.

When reviewing the scenarios, a minority group is any group that is not the majority within a specific context or setting. For example, if we are examining educational resource allocation in a region where the majority of students speak English as a first language, students who speak other languages at home would represent a minority group in that context.

The Data Scientists will provide you with the context and the problem. For example,

Context: Design a model for equitable distribution of healthcare resources, including medical staff, equipment, and facilities, across various regions.

Problem: Ensure the model allocates resources to address the needs of each region fairly, without introducing bias based on protected characteristics.

You will ask to supply your evaluation and eventually justification for which user characteristics might bias the model and then offer suggestions for how to mitigate these biases. There is no right or wrong answer, we’re collecting responses from 1000s of people and will average the results.

When considering protected identities, the following could influence the model's outcomes?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status

John, selected Age and Gender and Socioeconomic Status … here’s his rationale.

Age In my experience, I've seen that healthcare needs vary greatly with age, and overlooking this can lead to skewed resource distribution.

Gender I believe it's essential to represent gender-specific healthcare requirements accurately to avoid imbalances.

Socioeconomic Status I've observed that areas with different economic backgrounds encounter distinct barriers to healthcare, which can lead to unequal access if not addressed.

Next, we need to tell the data scientists which of these factors are most important to reduce bias for. In most models, we can’t entirely remove bias.

Question: Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):

    •	Age
    •	Disability
    •	Gender
    •	Gender identity/expression
    •	Marital Status
    •	National Origin
    •	Parental Status
    •	Political Affiliation
    •	Race/Ethnicity
    •	Sexual Orientation
    •	Socioeconomic Status
    •	Veteran Status

From the list of options you identified in the previous step, select the two protected classes that are most important to reduce bias around.

John selected Socioeconomic Status. Here’s his rationale:

My choice to prioritize socioeconomic status stems from witnessing how it affects all aspects of healthcare. In my view, it is a proxy for a multitude of other factors that impact health outcomes and access to medical resources. By focusing on this, I am taking a step towards addressing a root cause of inequality in healthcare provision.

Finally, there are many ways to reduce bias in a model. You will be asked to select a model evaluation criteria.

Question: Among the choices below, the data scientist should ensure that model:  
 • allocate resources to ensure that all groups across different regions have access to adequate healthcare.
• accurately reflect the healthcare needs of different groups. The model must recognize and address the specific health challenges faced by these groups.
• allocation of resources does not disadvantage regions with a high proportion of low socioeconomic status populations. The model must provide an equal opportunity for these regions to receive necessary healthcare resources.
• prevent systemic neglect of any region, regardless of its demographic makeup. It should be regularly assessed to correct any disparities in resource distribution

After assessing the criteria, John chose option C. allocation of resources does not disadvantage regions with a high proportion of low socioeconomic status populations. The model must provide an equal opportunity for these regions to receive necessary healthcare resources.

In offering his rationale, John reflects,

I've selected this criterion because of my firm belief that healthcare resources should be accessible to all, regardless of socioeconomic status. My experiences have shown me that the most significant disparities in health outcomes arise from resource inaccessibility in lower socioeconomic regions. By ensuring that our model gives precedence to accessibility, we can make a considerable difference in leveling the playing field for these communities, which is a powerful step toward healthcare equity.

In the next few sections, you will be asked a similar set of questions.

Context
Education
Problem
Allocate funding for educational resources such as teachers, materials, and funding for extracurricular programs among school districts in your state.
Evaluation
Which of the following protected identities be bias the outcome of the model (check all that apply)?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• I do not know

Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• I do know know

The developer should ensure that model:

Demographic Parity will allocate funds so that the percentage of schools in majority and minority districts that receive resources is the same.

This means if 10% of schools in majority areas get extra funding, then 10% of schools in minority areas should also receive extra funding, regardless of other factors.

Equalized Odds: allocation is accurate for schools in both majority and minority districts.

For example, if schools in majority neighborhoods have a high chance of correctly receiving funds when they need them, schools in minority neighborhoods should have an equally high chance of receiving those funds when their needs are the same.

Equal Opportunity: ensures that schools in need of more resources have an equal chance of getting this funding regardless of whether they're in majority or minority districts.

It means that if a school in a minority neighborhood with significant needs has a certain likelihood of getting extra funds, a school with similar needs in a majority neighborhood should have the same likelihood.

Disparate Impact: avoid giving fewer resources to schools in both minority and majority districts. We want to ensure that our method of distributing funds doesn't inadvertently disadvantage or overlook any group.

If we find that our funding allocation system results in predominantly minority schools consistently getting less funding, we will need to adjust our approach to correct this imbalance.

---- NEW PAGE

In this evaluation, you indicated that:

[options from the second question in the scenario]

were important and that the model output should ensure that:

[text selection from the third question in the scenario]

Can you provide a brief rationale for your choice? [Example]



Context
Housing
Problem
Your state government has funding to launch housing programs. You need to allocate funding among the communities in your region.
Evaluation
Which of the following protected identities be bias the outcome of the model (check all that apply)?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• Other [Text entry. Please comma separate values]

Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• Other options [Taken from comma separated entries]

The developer should ensure that model:

Demographic Parity: will distribute the funds so that both majority and minority groups have an equal chance of receiving housing assistance.

So, if 15% of the communities with a racial or ethnic majority population receive funding, then 15% of communities from a racial or ethnic minority should be allocated funding as well.

Equality Opportunity: focuses on giving housing program funds to communities that need it the most, with an equal chance minority and majority racial and ethnic groups.

If a racial or ethnic minority community is in dire need of housing support has a certain chance of receiving funding, then a predominantly Black or White community with similar needs should have the same chance of being funded.

Equalized Odds: ensure that our funding allocation correctly identifies communities in need of housing programs across majority and minority groups.

So, if a community with a high need in a majority racial and ethnic group area has a certain probability of being funded, a community with the same level of need in minority racial and ethnic groups area would have an equal probability of receiving funds.

Disparate Impact: ensuring that our funding allocation for housing doesn't inadvertently disadvantage communities of any racial group.

The outcome would ensure that, for instance, racial or ethnic minority communities are not receiving less funding due to our allocation process when compared to other communities with similar conditions.

---- NEW PAGE

In this evaluation, you indicated:

[options from the second question in the scenario]

were important and that the model output should ensure that:

[text selection from the third question in the scenario]

Can you provide a brief rationale for your choice?

Context
Employment
Problem
The Jobs Investment Act has funding for community-based jobs programs. Allocate job opportunities or job creation initiatives between the communities
Evaluation
• Which of the following protected identities be bias the outcome of the model?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• Other (can these be comma separated and processed for the next section)
• Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• The developer should ensure that the output of the model:  
 • Demographic Parity: ensure that the distribution of job opportunities or job creation initiatives is the same for every community, whether they're the majority or minority group.
• This means if 20% of predominantly majority group communities receive job program funds, then 20% of communities from minority groups will receive an equivalent share of the job program funds.
• Equalized Odds: accurately identify communities across all racial backgrounds that would benefit from job programs.
• This ensures that a community with a high unemployment rate in a racially or ethnic minority neighborhood has the same likelihood of being selected for job creation initiatives as a similarly situated racially or ethnic majority community.
• Equality Opportunity: providing resources to communities that most need job opportunities, irrespective of their racial composition.
• For instance, if a high-need Hispanic community has a certain probability of benefiting from job initiatives, communities with similar needs, whether they're predominantly Asian or White, should have an equal probability of receiving those benefits.
• Disparate Impact Parity: ensure that our job programs allocation method doesn't inadvertently result in fewer opportunities for any racial group of communities.
• The model evaluation will ensure that, for example, communities with a large Black population aren't consistently getting less funding or fewer job programs compared to other communities with similar economic situations.
• In the previous evaluation, you indicated that x and y were important and that the model output should ensure Z. Can you provide a brief rationale for your choice?



Context
Environmental Conservation
Problem
The Infrastructure Improvement Act has funding to address environmental conservation efforts. Allocate resources for environmental conservation efforts among communities
Evaluation
• Which of the following protected identities be bias the outcome of the model?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• Other (can these be comma separated and processed for the next section)
• Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• The developer should ensure that the output of the model:
• Demographic Parity: ensure that all communities receive an equal chance at funding, regardless of their racial makeup. This means that if 30% of predominantly White communities get funding for environmental projects, then 30% of predominantly Black, Asian, Hispanic, and other racially identified communities will also receive funding, ensuring a balanced distribution of conservation efforts.
• Equalized Odds: accurately identify communities in need of environmental conservation resources across all racial groups. This means that if a community in a predominantly White area and one in a predominantly Black area both have high levels of pollution, the algorithm should be equally likely to select both for conservation funding.
• Equal Opportunity: provide environmental conservation resources to the communities that most require them, with an equal chance for all racial groups. So, if a community in a predominantly Hispanic area with significant environmental challenges has a certain likelihood of receiving resources, a community with similar challenges in a predominantly Asian area should have the same likelihood of benefiting from the act.
• Disparate Impact: ensuring that the distribution of resources for environmental conservation does not unintentionally disadvantage any community based on racial composition. The model evaluation will ensure that, for instance, communities in predominantly Black neighborhoods are not receiving less support compared to other communities facing similar environmental issues.

    •	In the previous evaluation, you indicated that x and y were important and that the model output should ensure Z. Can you provide a brief rationale for your choice?

Context
Infrastructure Improvement
Problem
The Infrastructure Improvement Act has funding to fix infrastructure (e.g., bridges, roads) in a district. Allocate funds for infrastructure development
Evaluation
• Which of the following protected identities be bias the outcome of the model?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• Other (can these be comma separated and processed for the next section)
• Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• The developer should ensure that the output of the model:
• Demographic Parity: ensure that the distribution of funds is equal across districts with different racial compositions. For example, if 25% of districts with a majority White population receive funding for road improvements, then 25% of districts with majority populations of other races should receive a similar level of funding, irrespective of the condition of their current infrastructure.

    •	Equalized Odds: accurate decisions about which districts need infrastructure development funds the most, across all racial groups. This would mean that a district with poor road conditions in a predominantly Black area has the same chance of receiving funds as a similarly situated White or Hispanic district.

    •	Equal Opportunity: prioritize funding for districts that are most in need of infrastructure repairs, ensuring all racial groups have an equal chance of receiving funds. So, if a district with crumbling bridges in a predominantly Hispanic area has a certain likelihood of getting funding, a district with similar infrastructure challenges in a predominantly Asian area should have the same opportunity for funding.
    •	Disparate Impact: ensure that our method of allocating infrastructure funds doesn't inadvertently lead to fewer resources for any racial group of districts. We want to make sure that, for instance, districts with a large Black population aren't consistently underfunded compared to other districts with similar infrastructure needs.
    •	In the previous evaluation, you indicated that x and y were important and that the model output should ensure Z. Can you provide a brief rationale for your choice?

Context
Disaster Response
Problem
An earthquake has just struck a neighboring state and limited funding is available to address all humanitarian, logistics, and rebuilding efforts. Allocate disaster relief funds and resources between the disaster-prone and disaster-resistant regions.
Evaluation
• Which of the following protected identities be bias the outcome of the model?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• Other (can these be comma separated and processed for the next section)
• Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• The developer should ensure that the output of the model:
• Demographic Parity: distribute resources so that both disaster-prone and disaster-resistant regions receive an equal chance of funding. This means if 40% of the disaster-resistant regions receive some level of funding or resources, then 40% of the disaster-prone regions will also receive a similar level of support, regardless of their specific vulnerability or past disaster history.

    •	Equalized Odds: allocation of disaster relief is accurately addressing the needs of both disaster-prone and disaster-resistant areas. This approach means that a disaster-prone region with severe damages has the same chance of receiving funds as a disaster-resistant region with similar levels of damage, ensuring fairness in response to the actual impact of the earthquake.

    •	Equal Opportunity: focus on ensuring that regions most in need of disaster relief, whether they are traditionally disaster-prone or disaster-resistant, have an equal opportunity to receive funding. This means if a disaster-prone region with significant damages and humanitarian needs has a certain likelihood of getting help, a disaster-resistant region with similar levels of emergency should have the same chance of assistance.

    •	Disparate Impact: ensure that our distribution method doesn't unintentionally favor disaster-resistant regions over disaster-prone ones, or vice versa. We aim to carefully balance the funds and resources to avoid creating or exacerbating inequalities between these different types of regions, ensuring that aid is given based on current need rather than historical patterns.

    •	In the previous evaluation, you indicated that x and y were important and that the model output should ensure Z. Can you provide a brief rationale for your choice?

Context
Digital Access
Problem
New monies are available to address internet access. Allocate resources to improve digital access between the rural and urban areas
Evaluation
• Which of the following protected identifies be bias the outcome of the model?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• Other (can these be comma separated and processed for the next section)
• Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• The developer should ensure that the output of the model:

    •	Demographic Parity: distribute resources so that both rural and urban areas have an equal chance of receiving funding. This means if 50% of urban areas are allocated resources for internet access improvement, then 50% of rural areas should also receive a similar level of funding, regardless of their current internet infrastructure or population density.

    •	Equalized Odds: ensure that our decision to allocate digital access funds accurately reflects the needs of both rural and urban areas. This approach means that a rural area with poor internet connectivity has the same chance of receiving funds as an urban area with similar connectivity issues, striving for fairness in response to the actual digital divide.

    •	Equal Opportunity: ensuring that areas most in need of improved internet access, whether rural or urban, have an equal opportunity to receive funding. For instance, if a rural area with very limited digital access has a certain likelihood of getting support, an urban area with similar levels of poor connectivity should have the same chance of receiving resources.

    •	Disparate Impact: ensure that our method of allocating funds for digital access doesn't unintentionally favor urban over rural areas, or vice versa. Our aim is to analyze and balance the distribution of funds to avoid creating disparities between these regions, ensuring that the allocation of resources truly addresses the internet access needs based on current gaps rather than pre-existing infrastructure.

    •	In the previous evaluation, you indicated that x and y were important and that the model output should ensure Z. Can you provide a brief rationale for your choice?

Context
Public Safety
Problem
Allocate resources for public safety measures in neighborhoods
Evaluation
• Which of the following protected identifies be bias the outcome of the model?
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• Other (can these be comma separated and processed for the next section)
• Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status
• The developer should ensure that the output of the model:

    •	Demographic Parity: allocate resources so that each community, regardless of its demographic makeup or employment statistics, receives an equal chance of funding. For example, if 30% of communities with high employment rates are allocated certain resources, then 30% of communities with lower employment rates should also receive a similar level of resources, ensuring a uniform approach to resource distribution.

    •	Equalized Odds: ensure that the allocation of resources based on census and employment data is equally accurate for all communities. This means that a community with specific needs, identified through census and employment data, has the same chance of receiving resources as any other community with similar needs, regardless of their demographic or employment differences.

    •	Equal Opportunity: allocating resources to communities most in need, as identified by census and employment data, and ensuring all communities have an equal opportunity to receive these resources. So, if a community with a particular demographic profile and low employment rate has a certain likelihood of receiving aid, a community with a similar profile should have the same likelihood of benefitting from the resources.

    •	Disparate Impact: ensures that our use of census and employment data for resource allocation does not unintentionally disadvantage any community based on its demographic or employment characteristics. We aim to carefully analyze and balance the distribution of resources to avoid creating disparities among communities, ensuring that the allocation is responsive to the actual needs as reflected in the data.

    •	In the previous evaluation, you indicated that x and y were important and that the model output should ensure Z. Can you provide a brief rationale for your choice?

ATTITUDES AND OPINIONS ABOUT BIAS IN ML

The following questions help us understand your perceptions and concerns regarding fairness and ethics in AI systems.

Please rate your level of agreement with the following statements:

It is important for algorithmic systems to consider individual needs and well-being to ensure fair and personalized experiences.

Options:
Strongly disagree
Somewhat disagree
Neither agree nor disagree
Somewhat agree
Strongly agree
Algorithmic systems should prioritize other objectives, such as efficiency or profitability over individual needs and well-being

Algorithmic systems should focus solely on their primary objectives and not be concerned with individual needs and well-being.

Algorithmic systems should base decisions solely on objective criteria to ensure fairness and eliminate discrimination.

There may be instances where considering social or demographic backgrounds could lead to more just and inclusive results.

Algorithmic systems should consider social and demographic backgrounds to address historical biases and promote equity.

DEMOGRAPHICS

In what year were you born? 
[Text entry]

What is your current gender?

Options:
Man
Woman
Not listed, please tell us [Text entry]

What is your home country?

Options:
Dropdown or search of Countries

Please select the option that represents the total number of years you have spent in formal education, including primary, secondary, and higher education.

Options:
0-6 years
7-9 years
10-12 years
13-15 years
16 or more years

Which phrase best describes the area where you currently live?

Options:
A big city
The suburbs or outskirts of a big city
A town or a small city
A country village
A farm or home in the countryside

Which of the descriptions comes closest to how feel you about your household’s income over the last five years?

Options:
Living comfortably on present income
Coping on present income
Finding it difficult on present income
Finding it very difficult on present income
Prefer not to say

Do you consider yourself as belonging to any religion or denomination?

Options:
Yes
No
Prefer not to say

Which religion do you belong to?

Options:
Roman Catholic
Protestant
Eastern Orthodox
Jewish
Islam
Eastern religions
Other non-Christian religions
Other Christian denomination
Prefer not to say

Do you consider yourself a member of a minority group?

Options:
Yes
No
Don't know

Please identify any minority group(s) to which you belong (select all that apply):
• Age
• Disability
• Gender
• Gender identity/expression
• Marital Status
• National Origin
• Parental Status
• Political Affiliation
• Race/Ethnicity
• Sexual Orientation
• Socioeconomic Status
• Veteran Status

Would you describe yourself as being a member of a group that is discriminated against?

Options:
Yes
No

Exit

Thank you for participating!Our research team is interested in hearing more about your experiences. Would you be interested in participating in a comprehensive interview on algorithmic bias? If you're up for it, please share your email address, and if chosen, we'll compensate you for your time.

Options:
Yes, I would like to participate
No, I do not want to participate

What is your email address?

[Text entry]
