lmsApp.controller("bookLoanBorrowerController",function($scope,$http,lmsFactory,lmsConstants,$location,$window,Pagination,$routeParams){
		
			$scope.cardNo=$routeParams.cardNo;
//			console.log($scope.cardNo);
			
			lmsFactory.getAll(lmsConstants.GET_LOAN_BY_USER+$scope.cardNo).then(function(data){
				$scope.loans=data;
				$scope.pagination = Pagination.getNew(10);
				$scope.pagination.numPages = Math.ceil($scope.loans.length/$scope.pagination.perPage);
			})
			
		
			
			var today =new Date();
			
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!

			var yyyy = today.getFullYear();
			if(dd<10){
			    dd='0'+dd;
			} 
			if(mm<10){
			    mm='0'+mm;
			} 
			$scope.currDate = String(yyyy+"-"+mm+"-"+dd);
			
			
			$scope.selectedDate={
					value: new Date()
			}
			
			$scope.dateChange=function(d){
				console.log($scope.selectedDate.value);
				
			}
			
			
			
			$scope.checkOutBook=function(){
				$location.url("/borrower/checkLoan/"+$scope.cardNo);
			}
			
			
			$scope.returnBook=function(bookloan){
				
				var today =new Date();
				
				var dd = today.getDate();
				var mm = today.getMonth()+1; //January is 0!

				var yyyy = today.getFullYear();
				if(dd<10){
				    dd='0'+dd;
				} 
				if(mm<10){
				    mm='0'+mm;
				} 
				
				bookloan.dateIn = String(yyyy+"-"+mm+"-"+dd+" "+"23:59:59");
				
				var bookCopy={
						"bookId": bookloan.bookId,
						"branchId": bookloan.branchId
				};
				
				
				
				lmsFactory.updateObject(lmsConstants.RETURN_BOOK_LOAN+"?bookId="+bookloan.bookId+"&branchId="+bookloan.branchId+"&cardNo="+bookloan.cardNo,bookloan).then(function(){

					lmsFactory.updateObject(lmsConstants.UPDATE_BOOK_COPY2,bookCopy).then(function(data){
						lmsFactory.getAll(lmsConstants.GET_LOAN_BY_USER+$scope.cardNo).then(function(data){  //list starts here
							$scope.loans=data;
							$scope.pagination = Pagination.getNew(10);
							$scope.pagination.numPages = Math.ceil($scope.loans.length/$scope.pagination.perPage);
							$window.location="#/borrower/bookLoanList/"+$scope.cardNo;
						})  //get the list again
					})
				})
				
			}
			
			
		
	})