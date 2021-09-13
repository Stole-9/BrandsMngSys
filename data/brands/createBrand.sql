INSERT INTO dbo.Brand([BrandName]
					  ,[BrandDescription]
					  )
VALUES(@BrandName,
	   @BrandDescription)
       
SELECT SCOPE_IDENTITY() AS BrandID,@BrandName BrandName, @BrandDescription BrandDescription
