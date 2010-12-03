describe 'WebMercatorProjection'
	before_each 
		prj=nanocore.WebMercatorProjection
	end
	
	describe 'WebMercatorProjection'
		it 'should map the origin forward to 0'
			xy=prj.forward({x: 0, y: 0})
			xy.x.should.equal_approximately 0
			xy.y.should.equal_approximately 0
		end
		
		it 'should map the origin inversely to 0'
			xy=prj.inverse({x: 0, y: 0});
			xy.x.should.equal_approximately 0
			xy.y.should.equal_approximately 0
		end
	end
	
end

