UPDATE dbo.Brand
SET [BrandName]= @BrandName,
	[BrandDescription] = @BrandDescription
WHERE [BrandID] = @brandID 

SELECT [BrandID]
      ,[BrandName]
      ,[BrandDescription]
FROM [dbo].[Brand]
WHERE [BrandID] = @brandID 
